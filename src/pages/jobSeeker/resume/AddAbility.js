import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import AbilityService from "../../../services/abilityService";

export default function AddAbility({ resumeId, update }) {
    const initialValues = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        description: Yup.string().required("Açıklama alanı zorunlu").max(255),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    let abilityService = new AbilityService();
                    const ability = {
                        name: values.name,
                        description: values.description,
                        resumeId: resumeId,
                    };
                    abilityService
                        .postAbility(ability)
                        .then(function (result) {
                            toast.success(result.data.message);
                            update();
                        });
                }}
            >
                <Form className="ui form">
                    <AtayTextInput name="name" placeholder="Ad" label="Ad" />
                    <AtayTextInput name="description" placeholder="Açıklama" label="Açıklama" />
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
