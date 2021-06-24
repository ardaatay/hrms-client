import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import ExperienceService from "../../../services/experienceService";

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

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    let experienceService = new ExperienceService();
                    const experience = {
                        name: values.name,
                        position: values.position,
                        startYear: values.startYear,
                        finishYear: values.finishYear,
                        resumeId: resumeId,
                    };
                    experienceService
                        .postExperience(experience)
                        .then(function (result) {
                            toast.success(result.data.message);
                            update();                            
                        });
                }}
            >
                <Form className="ui form">
                    <AtayTextInput name="name" placeholder="Ad" label="Ad" />
                    <AtayTextInput name="position" placeholder="Pozisyon" label="Pozisyon" />
                    <AtayTextInput
                        name="startYear"
                        placeholder="Başlangıç Yılı"
                        label="Başlangıç Yılı"
                    />
                    <AtayTextInput
                        name="finishYear"
                        placeholder="Ayrılış Yılı"
                        label="Ayrılış Yılı"
                    />
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
