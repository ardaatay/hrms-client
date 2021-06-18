import React from "react";
import { useFormik } from "formik";
import { Button, Form, Message } from "semantic-ui-react";
import { toast } from "react-toastify";

import WorkWayService from "../../../services/workWayService";

export default function WorkWayAdd() {
    let workWay = {};

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Zorunlu";
        } else if (values.name.length > 255) {
            errors.name = "En fazla 255 karakter olabilir";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validate,
        onSubmit: (values) => {
            let workWayService = new WorkWayService();
            workWay = { name: values.name };
            workWayService
                .postWorkWay(workWay)
                .then((result) => toast.success(result.data.message));
        },
    });

    return (
        <div>
            <Message
                attached
                header="Çalışma Şekli"
                content="Örnek: Full Time, Part Time"
            />
            <Form
                className="attached fluid segment"
                onSubmit={formik.handleSubmit}
            >
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
                <Button type="submit">Kaydet</Button>
            </Form>
        </div>
    );
}
