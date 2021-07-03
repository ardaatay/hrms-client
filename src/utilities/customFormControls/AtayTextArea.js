import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

function AtayTextArea(props) {
    const { label, name, ...rest } = props;
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field className="form-control" as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default AtayTextArea;
