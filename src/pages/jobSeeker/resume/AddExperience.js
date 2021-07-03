import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import ExperienceService from "../../../services/experienceService";
import FormikControl from "../../../utilities/customFormControls/FormikControl";

export default function AddExperience({ resumeId, update }) {
    const initialValues = {
        name: "",
        position: "",
        startYear: 0,
        finishYear: 0,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        position: Yup.string().required("Pozisyon alanı zorunlu").max(255),
        startYear: Yup.number().required("Başlangıç yılı zorunlu"),
    });

    const onSubmit = (values) => {
        let experienceService = new ExperienceService();
        const experience = {
            name: values.name,
            position: values.position,
            startYear: values.startYear,
            finishYear: values.finishYear,
            resumeId: resumeId,
        };
        experienceService.postExperience(experience).then(function (result) {
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
                            control="input"
                            type="text"
                            name="position"
                            label="Pozisyon"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="startYear"
                            label="Başlangıç Yılı"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="finishYear"
                            label="Ayrılış Yılı"
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
