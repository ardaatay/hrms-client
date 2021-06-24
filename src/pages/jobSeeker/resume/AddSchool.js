import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import SchoolService from "../../../services/schoolService";

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

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
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
                }}
            >
                <Form className="ui form">
                    <AtayTextInput name="name" placeholder="Okul" label="Okul" />
                    <AtayTextInput name="department" placeholder="Bölüm" label="Bölüm" />
                    <AtayTextInput name="degree" placeholder="Derece" label="Derece" />
                    <AtayTextInput
                        name="startYear"
                        placeholder="Başlangıç Yılı"
                        label="Başlangıç Yılı"
                    />
                    <AtayTextInput
                        name="finishYear"
                        placeholder="Bitiriş Yılı"
                        label="Bitiriş Yılı"
                    />
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
