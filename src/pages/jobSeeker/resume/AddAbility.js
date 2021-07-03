import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import AbilityService from "../../../services/abilityService";
import FormikControl from "../../../utilities/customFormControls/FormikControl";

export default function AddAbility({ resumeId, update }) {
    const initialValues = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        description: Yup.string().required("Açıklama alanı zorunlu").max(255),
    });

    const onSubmit = (values) => {
        let abilityService = new AbilityService();
        const ability = {
            name: values.name,
            description: values.description,
            resumeId: resumeId,
        };
        abilityService.postAbility(ability).then(function (result) {
            toast.success(result.data.message);
            update();
        });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <Form className="ui form">
                        <FormikControl
                            control="input"
                            type="text"
                            name="name"
                            label="Ad"
                        />
                        <FormikControl
                            control="textarea"
                            name="description"
                            label="Açıklama"
                        />
                        <button type="submit" className="btn btn-primary">
                            Kaydet
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
