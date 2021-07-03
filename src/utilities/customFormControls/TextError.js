import React from "react";
import { Form } from "react-bootstrap";

function TextError(props) {
    return (
        <div>
            <Form.Control.Feedback type="invalid">
                {props.children}
            </Form.Control.Feedback>
        </div>
    );
}

export default TextError;
