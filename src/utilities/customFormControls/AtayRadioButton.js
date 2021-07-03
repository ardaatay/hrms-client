import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";

function AtayRadioButton({ label, options, ...props }) {
    const [field] = useField(props);
    console.log("Field",field);
    return (
        <div className="mb-3">
            <label>{label}</label>
            {options.map((option) => {
                return (
                    <Form.Check
                        key={option.key}
                        type="radio"
                        inline
                        {...field}
                        {...props}
                    >
                        <Form.Check.Input
                            id={field.name + option.value}
                            type="radio"
                        />
                        <Form.Check.Label>{option.text}</Form.Check.Label>
                    </Form.Check>
                );
            })}
        </div>
    );
}

export default AtayRadioButton;
