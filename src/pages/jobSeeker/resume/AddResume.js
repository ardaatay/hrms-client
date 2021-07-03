import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import FormikControl from "../../../utilities/customFormControls/FormikControl";
import ResumeService from "../../../services/resumeService";

export default function AddResume() {
    let history = useHistory();

    const initialValues = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        description: Yup.string().required("Açıklama alanı zorunlu").max(1000),
    });

    const onSubmit = (values) => {
        let resumeService = new ResumeService();
        const resume = {
            name: values.name,
            description: values.description,
            jobSeekerId: 0,
        };
        resumeService.postResume(resume).then(function (result) {
            toast.success(result.data.message);
            history.push("/jobseeker/resume/list");
        });
    };

    return (
        <div className="container">
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
