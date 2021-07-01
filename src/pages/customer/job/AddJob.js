import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Button, Container, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import AtayTextInput from "../../../utilities/customFormControls/AtayTextInput";
import AtayDropDown from "../../../utilities/customFormControls/AtayDropDown";
import AtayDateTime from "../../../utilities/customFormControls/AtayDateTime";

import JobService from "../../../services/jobService";
import CityService from "../../../services/cityService";
import PositionService from "../../../services/positionService";
import WorkWayService from "../../../services/workWayService";
import JobTypeService from "../../../services/jobTypeService";

export default function AddJob() {
    let history = useHistory();

    const [cities, setCities] = useState([]);
    const [positions, setPositions] = useState([]);
    const [workWays, setWorkWays] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);

    const initialValues = {
        jobTitle: "",
        description: "",
        requirements: "",
        minSalary: 0,
        maxSalary: 0,
        count: 0,
        cityId: 0,
        positionId: 0,
        workWayId: 0,
        jobTypeId: 0,
        lastDate: null,
    };

    const validationSchema = Yup.object().shape({
        jobTitle: Yup.string()
            .required("İş adı alanı zorunlu")
            .max(255, "En fazla 255 karakter olmalıdır"),
        description: Yup.string()
            .required("Açıklama alanı zorunlu")
            .max(255, "En fazla 255 karakter olmalıdır"),
        requirements: Yup.string()
            .required("Açıklamalar")
            .max(255, "En fazla 255 karakter olmalıdır"),
        minSalary: Yup.number(),
        maxSalary: Yup.number(),
        count: Yup.number(),
        lastDate: Yup.date()
            .required("En son başvuru tarihi zorunlu")
            .nullable(),
    });

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));

        let positionService = new PositionService();
        positionService
            .getPositions()
            .then((result) => setPositions(result.data.data));

        let workWayService = new WorkWayService();
        workWayService
            .getWorkWays()
            .then((result) => setWorkWays(result.data.data));

        let jobTypeService = new JobTypeService();
        jobTypeService
            .getJobTypes()
            .then((result) => setJobTypes(result.data.data));
    }, []);

    const optionsCity = [];
    cities.map((city) =>
        optionsCity.push({ key: city.id, value: city.id, text: city.name })
    );

    const optionsPosition = [];
    positions.map((position) =>
        optionsPosition.push({
            key: position.id,
            value: position.id,
            text: position.name,
        })
    );

    const optionsWorkWay = [];
    workWays.map((workWay) =>
        optionsWorkWay.push({
            key: workWay.id,
            value: workWay.id,
            text: workWay.name,
        })
    );

    const optionsJobType = [];
    jobTypes.map((jobType) =>
        optionsJobType.push({
            key: jobType.id,
            value: jobType.id,
            text: jobType.name,
        })
    );

    return (
        <div>
            <Container className="main">
                <Header as="h2">İş Başvurusu Ekle</Header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    handleChange
                    onSubmit={(values) => {
                        const job = JSON.parse(JSON.stringify(values));
                        let jobService = new JobService();
                        jobService.postJob(job).then(function (result) {
                            toast.success(result.data.message);
                            history.push("/customer/job/list");
                        });
                    }}
                >
                    <Form className="ui form">
                        <AtayTextInput
                            name="jobTitle"
                            placeholder="İş adı"
                            label="İş Adı"
                        />
                        <AtayTextInput
                            name="description"
                            placeholder="Açıklama"
                            label="Açıklama"
                        />
                        <AtayTextInput
                            name="requirements"
                            placeholder="Gereklilikler"
                            label="Gereklilikler"
                        />
                        <AtayTextInput
                            name="minSalary"
                            placeholder="En düşük maaş"
                            label="En Düşük Maaş"
                        />
                        <AtayTextInput
                            name="maxSalary"
                            placeholder="En yüksek maaş"
                            label="En Yüksek Maaş"
                        />
                        <AtayTextInput
                            name="count"
                            placeholder="Alınacak personel sayısı"
                            label="Personel Sayısı"
                        />
                        <AtayDropDown
                            label="Şehir"
                            name="cityId"
                            placeholder="Seçiniz"
                            fluid
                            selection
                            options={optionsCity}
                        />
                        <AtayDropDown
                            label="Pozisyon"
                            name="positionId"
                            placeholder="Seçiniz"
                            fluid
                            selection
                            options={optionsPosition}
                        />
                        <AtayDropDown
                            label="Çalışma Şekli"
                            name="workWayId"
                            placeholder="Seçiniz"
                            fluid
                            selection
                            options={optionsWorkWay}
                        />
                        <AtayDropDown
                            label="İş Türü"
                            name="jobTypeId"
                            placeholder="Seçiniz"
                            fluid
                            selection
                            options={optionsJobType}
                        />
                        <AtayDateTime
                            label="Son Başvuru Tarihi"
                            placeholderText="Son Başvuru Tarihini Giriniz..."
                            name="lastDate"
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
