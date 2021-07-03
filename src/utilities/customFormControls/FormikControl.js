import React from "react";
import AtayInput from "./AtayInput";
import AtayRadioButton from "./AtayRadioButton";
import AtaySelect from "./AtaySelect";
import AtayTextArea from "./AtayTextArea";

function FormikControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <AtayInput {...rest} />;
        case "textarea":
            return <AtayTextArea {...rest} />;
        case "select":
            return <AtaySelect {...rest} />;
        case "radio":
            return <AtayRadioButton {...rest} />;
        case "checkbox":
        case "date":
        default:
            return null;
    }
}

export default FormikControl;
