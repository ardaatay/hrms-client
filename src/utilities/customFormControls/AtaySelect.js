import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

function AtaySelect(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <Field
                as="select"
                id={name}
                name={name}
                className="form-select"
                {...rest}
            >
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.value}>
                            {option.text}
                        </option>
                    );
                })}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default AtaySelect;
