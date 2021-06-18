import React from "react";
import { useFormik } from "formik";
import { Button, Form, Container } from "semantic-ui-react";
import { toast } from "react-toastify";
import ExperienceService from "../../../services/experienceService";

export default function AddExperience() {
    let experience = {};

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Zorunlu";
        } else if (values.name.length > 255) {
            errors.name = "En fazla 255 karakter olabilir";
        }

        if (!values.position) {
            errors.position = "Zorunlu";
        } else if (values.position.length > 255) {
            errors.position = "En fazla 255 karakter olabilir";
        }

        if (!values.startYear) {
            errors.startYear = "Zorunlu";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            startYear: 0,
            finishYear: 0,
            resumeId: 0,
        },
        validate,
        onSubmit: (values) => {
            let experienceService = new ExperienceService();
            experience = {
                name: values.name,
                position: values.position,
                startYear: values.startYear,
                finishYear: values.finishYear,
                resumeId:values.resumeId,
            };
            experienceService
                .postExperience(experience)
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
                        <label>Pozisyon</label>
                        <input
                            id="position"
                            name="position"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.position}
                        />
                        {formik.errors.position ? (
                            <div>{formik.errors.position}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Başlama Zamanı</label>
                        <input
                            id="startYear"
                            name="startYear"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.startYear}
                        />
                        {formik.errors.startYear ? (
                            <div>{formik.errors.startYear}</div>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Ayrılış Zamanı</label>
                        <input
                            id="finishYear"
                            name="finishYear"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.finishYear}
                        />
                        {formik.errors.finishYear ? (
                            <div>{formik.errors.finishYear}</div>
                        ) : null}
                    </Form.Field>
                    <Button type="submit" primary>
                        Kaydet
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
