import React from "react";
import { Formik, Form } from "formik";
import { Button, Container, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import ResumeService from "../../../services/resumeService";

export default function AddResume() {
    let history = useHistory();

    const initialValues = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ad alanı zorunlu").max(255),
        description: Yup.string().required("Açıklama alanı zorunlu").max(1000),
    });

    return (
        <div>
            <Container className="main">
                <Header as="h2">Özgeçmiş Ekle</Header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        let resumeService = new ResumeService();
                        const resume = {
                            name: values.name,
                            description: values.description,
                            jobSeekerId: 0,
                        };
                        resumeService
                            .postResume(resume)
                            .then(function (result) {
                                toast.success(result.data.message);
                                history.push("/jobseeker/resumes/list");
                            });
                    }}
                >
                    <Form className="ui form">
                        <AtayTextInput
                            name="name"
                            placeholder="Ad"
                            label="Ad"
                        />
                        <AtayTextInput
                            name="description"
                            placeholder="Açıklama"
                            label="Açıklama"
                        />
                        <Button type="submit" primary>
                            Kaydet
                        </Button>
                    </Form>
                </Formik>
            </Container>
        </div>
    );
}
