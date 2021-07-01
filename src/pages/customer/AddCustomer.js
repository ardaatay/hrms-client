import React from "react";
import { Formik, Form } from "formik";
import { Button, Container, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import AtayTextInput from "../../utilities/customFormControls/AtayTextInput"
import CustomerService from "../../services/customerService";

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
        email: Yup.string().email("Email uyumsuz").required("Email alanı zorunlu").max(255),
        password: Yup.string().required("Şifre alanı zorunlu").min(6,"Şifre en az 6 karakter olmalı").max(255),
        passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password")],
            "Şifreler uyumsuz"
        ),
        companyName: Yup.string().required("Şirket adı alanı zorunlu").max(255),
        phone: Yup.string().required("Telefon alanı zorunlu").max(255),
        taxNumber: Yup.string().required("Vergi No alanı zorunlu").max(255),
        webSite: Yup.string().required("Website alanı zorunlu").max(255),
    });

    return (
        <div>
            <Container className="main">
                <Header as="h2">Şirket Kayıt</Header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        let customerService = new CustomerService();
                        customerService
                            .postCustomer(values)
                            .then(function (result) {
                                toast.success(result.data.message);
                                history.push("/customer/login");
                            });
                    }}
                >
                    <Form className="ui form">
                        <AtayTextInput
                            name="email"
                            placeholder="Email"
                            label="Email"
                        />
                        <AtayTextInput
                            name="password"
                            placeholder="Şifre"
                            label="Şifre"
                            type="password"
                        />
                        <AtayTextInput
                            name="passwordConfirmation"
                            placeholder="Şifre Tekrar"
                            label="Şifre Tekrar"
                            type="password"
                        />
                        <AtayTextInput
                            name="companyName"
                            placeholder="Şirket Adı"
                            label="Şirket Adı"
                        />
                        <AtayTextInput
                            name="phone"
                            placeholder="Telefonunuzu giriniz başında 0 olmadan."
                            label="Telefon"
                        />
                        <AtayTextInput
                            name="taxNumber"
                            placeholder="Vergi numaranızı giriniz"
                            label="Vergi No"
                        />
                        <AtayTextInput
                            name="webSite"
                            placeholder="Web site adresiniz"
                            label="Web Site"
                        />
                        <Button type="submit" primary>
                            Kaydet
                        </Button>
                    </Form>
                </Formik>
            </Container>
        </div>
    );
}
