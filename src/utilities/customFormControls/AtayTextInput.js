import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function AtayTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.touched && !!meta.error ? (
                <Label basic color="red" pointing>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
