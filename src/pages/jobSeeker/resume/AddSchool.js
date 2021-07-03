import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import SchoolService from "../../../services/schoolService";
import FormikControl from "../../../utilities/customFormControls/FormikControl";

export default function AddSchool({ resumeId, update }) {
    const initialValues = {
        name: "",
        department: "",
        degree: 0,
        startYear: 0,
        finishYear: 0,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Okul alanı zorunlu").max(255),
        department: Yup.string().required("Bölüm alanı zorunlu").max(255),
        degree: Yup.number().required("Derece alanı zorunlu"),
        startYear: Yup.number().required("Başlangıç yılı zorunlu"),
    });

    const onSubmit = (values) => {
        let schoolService = new SchoolService();
        const school = {
            name: values.name,
            department: values.department,
            degree: values.degree,
            startYear: values.startYear,
            finishYear: values.finishYear,
            resumeId: resumeId,
        };
        schoolService.postSchool(school).then(function (result) {
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
                            label="Okul"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="department"
                            label="Bölüm"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="degree"
                            label="Derece"
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
                            label="Bitiriş Yılı"
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
