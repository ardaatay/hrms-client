import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LanguageService from "../../../services/languageService";
import FormikControl from "../../../utilities/customFormControls/FormikControl";

export default function AddLanguage({ resumeId, update }) {
    const initialValues = {
        name: "",
        level: 0,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        level: Yup.number()
            .required("Seviye alanı zorunlu")
            .min(1, "En az 1 olabilir")
            .max(10, "En fazla 10 olabilir"),
    });

    const onSubmit = (values) => {
        let languageService = new LanguageService();
        const language = {
            name: values.name,
            level: values.level,
            resumeId: resumeId,
        };
        languageService.postLanguage(language).then(function (result) {
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
                            name="level"
                            label="Seviye 1-10 arası"
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
