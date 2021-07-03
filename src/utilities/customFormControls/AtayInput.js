import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";

function AtayInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...field}
                {...props}
                isValid={meta.touched && meta.error === undefined}
                isInvalid={meta.touched && !!meta.error}
            />
            <Form.Control.Feedback type="invalid">
                {meta.error}
            </Form.Control.Feedback>
        </div>
    );
}

export default AtayInput;
