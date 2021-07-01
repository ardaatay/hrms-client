import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";
import DateView from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AtayDateTime({ label, placeholderText, ...props }) {
    const [field, meta, form] = useField(props);
    const { name, value } = field;
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label htmlFor={name}>{label}</label>
            <DateView
                id={name}
                {...field}
                {...props}
                dateFormat="dd/MM/yyyy"
                placeholderText={placeholderText}
                selected={value}
                onChange={(val) => form.setValue(val)}
            />
            {meta.touched && !!meta.error ? (
                <Label basic color="red" pointing>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
