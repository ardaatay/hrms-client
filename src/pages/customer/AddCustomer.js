import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import CustomerService from "../../services/customerService";
import FormikControl from "../../utilities/customFormControls/FormikControl";

export default function AddCustomer() {
    let history = useHistory();

    const initialValues = {
        email: "",
        password: "",
        passwordConfirmation: "",
        companyName: "",
        phone: "",
        taxNumber: "",
        webSite: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email uyumsuz")
            .required("Email alanı zorunlu")
            .max(255),
        password: Yup.string()
            .required("Şifre alanı zorunlu")
            .min(6, "Şifre en az 6 karakter olmalı")
            .max(255),
        passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password")],
            "Şifreler uyumsuz"
        ),
        companyName: Yup.string().required("Şirket adı alanı zorunlu").max(255),
        phone: Yup.string().required("Telefon alanı zorunlu").max(255),
        taxNumber: Yup.string().required("Vergi No alanı zorunlu").max(255),
        webSite: Yup.string().required("Website alanı zorunlu").max(255),
    });

    const onSubmit = (values) => {
        let customerService = new CustomerService();
        customerService.postCustomer(values).then(function (result) {
            toast.success(result.data.message);
            history.push("/customer/login");
        });
    };

    return (
        <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className="ui form">
                        <FormikControl
                            control="input"
                            type="text"
                            name="email"
                            label="Email"
                        />
                        <FormikControl
                            control="input"
                            type="password"
                            name="password"
                            label="Şifre"
                        />
                        <FormikControl
                            control="input"
                            type="password"
                            name="passwordConfirmation"
                            label="Şifre Tekrar"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="companyName"
                            label="Şirket Adı"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="phone"
                            label="Telefon"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="taxNumber"
                            label="Vergi No"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="webSite"
                            label="Web Site"
                        />
                        <button type="submit" primary>
                            Kaydet
                        </button>
                    </Form>
                </Formik>
        </div>
    );
}
