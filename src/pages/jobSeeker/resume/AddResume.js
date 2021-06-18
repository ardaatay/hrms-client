import React from "react";
import { useFormik } from "formik";
import { Button, Form, Container } from "semantic-ui-react";
import { toast } from "react-toastify";
import ResumeService from "../../../services/resumeService";
import AddExperience from "./AddExperience";

export default function AddResume() {
    let resume = {};

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Zorunlu";
        } else if (values.name.length > 255) {
            errors.name = "En fazla 255 karakter olabilir";
        }

        if (!values.description) {
            errors.description = "Zorunlu";
        } else if (values.description.length > 1000) {
            errors.description = "En fazla 1000 karakter olabilir";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validate,
        onSubmit: (values) => {
            let resumeService = new ResumeService();
            resume = { name: values.name, description: values.description };
            resumeService
                .postResume(resume)
                .then((result) => toast.success(result.data.message));
        },
    });

    return (
        <div>
            <Container className="main">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                        <label>Ad</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ad"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Ön Yazı</label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        {formik.errors.description ? (
                            <div>{formik.errors.description}</div>
                        ) : null}
                    </Form.Field>
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
                <AddExperience/>
            </Container>
        </div>
    );
}
