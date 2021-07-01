import { useField } from "formik";
import React from "react";
import { FormField, Label, Select } from "semantic-ui-react";

export default function AtayDropDown({ label, options, ...props }) {
    const [field, meta, form] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>
                {label}
                <Select
                    {...props}
                    options={options}
                    onChange={(e, v) => form.setValue(v.value)}
                    value={field.value}
                />
            </label>
            {meta.touched && !!meta.error ? (
                <Label basic color="red" pointing>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
