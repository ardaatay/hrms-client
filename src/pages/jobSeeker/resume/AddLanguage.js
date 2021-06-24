import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import LanguageService from "../../../services/languageService";

export default function AddLanguage({ resumeId, update }) {
    const initialValues = {
        name: "",
        level: 0,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        level: Yup.number().required("Seviye alanı zorunlu").min(1,"En az 1 olabilir").max(10,"En fazla 10 olabilir"),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    let languageService = new LanguageService();
                    const language = {
                        name: values.name,
                        level: values.level,
                        resumeId: resumeId,
                    };
                    languageService
                        .postLanguage(language)
                        .then(function (result) {
                            toast.success(result.data.message);
                            update();
                        });
                }}
            >
                <Form className="ui form">
                    <AtayTextInput name="name" placeholder="Ad" label="Ad" />
                    <AtayTextInput
                        name="level"
                        placeholder="Seviye"
                        label="Seviye 1-10 arası"
                    />
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
