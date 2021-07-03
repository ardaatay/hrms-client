import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import JobService from "../../../services/jobService";
import CityService from "../../../services/cityService";
import PositionService from "../../../services/positionService";
import WorkWayService from "../../../services/workWayService";
import JobTypeService from "../../../services/jobTypeService";

import FormikControl from "../../../utilities/customFormControls/FormikControl";

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
        cityId: "",
        positionId: "",
        workWayId: "",
        jobTypeId: "",
        lastDate: null,
    };

    const validationSchema = Yup.object().shape({
        jobTitle: Yup.string()
            .required("Zorunlu")
            .max(255, "En fazla 255 karakter olmalıdır"),
        description: Yup.string()
            .required("Zorunlu")
            .max(255, "En fazla 255 karakter olmalıdır"),
        requirements: Yup.string()
            .required("Zorunlu")
            .max(255, "En fazla 255 karakter olmalıdır"),
        minSalary: Yup.number().required("Zorunlu"),
        maxSalary: Yup.number().required("Zorunlu"),
        count: Yup.number().required("Zorunlu"),
        cityId: Yup.string().required("Zorunlu"),
        positionId: Yup.string().required("Zorunlu"),
        workWayId: Yup.string().required("Zorunlu"),
        jobTypeId: Yup.string().required("Zorunlu"),
        lastDate: Yup.date().required("Zorunlu").nullable(),
    });

    const onSubmit = (values) => {
        const job = JSON.parse(JSON.stringify(values));
        let jobService = new JobService();
        jobService.postJob(job).then(function (result) {
            toast.success(result.data.message);
            history.push("/customer/job/list");
        });
    };

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

    const optionsCity = [{ key: 0, value: "", text: "Seçiniz" }];
    cities.map((city) =>
        optionsCity.push({ key: city.id, value: city.id, text: city.name })
    );

    const optionsPosition = [{ key: 0, value: "", text: "Seçiniz" }];
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

    const optionsJobType = [{ key: 0, value: "", text: "Seçiniz" }];
    jobTypes.map((jobType) =>
        optionsJobType.push({
            key: jobType.id,
            value: jobType.id,
            text: jobType.name,
        })
    );

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(
                    formik
                ) => (
                    <Form noValidate>
                        <FormikControl
                            control="input"
                            type="text"
                            name="jobTitle"
                            label="İş Adı"
                        />
                        <FormikControl
                            control="textarea"
                            name="description"
                            label="Açıklama"
                        />
                        <FormikControl
                            control="textarea"
                            name="requirements"
                            label="Gereklilikler"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="minSalary"
                            label="En Düşük Maaş"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="maxSalary"
                            label="En Yüksek Maaş"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="count"
                            label="Alınacak Personel Sayısı"
                        />
                        <FormikControl
                            control="select"
                            label="Şehir"
                            name="cityId"
                            options={optionsCity}
                        />
                        <FormikControl
                            control="select"
                            label="Pozisyon"
                            name="positionId"
                            options={optionsPosition}
                        />
                        <FormikControl
                            control="radio"
                            label="Çalışma Şekli"
                            name="workWayId"
                            options={optionsWorkWay}
                        />
                        <FormikControl
                            control="select"
                            label="İş Türü"
                            name="jobTypeId"
                            options={optionsJobType}
                        />

                        {/*
                        
                        <AtayDateTime
                            label="Son Başvuru Tarihi"
                            placeholderText="Son Başvuru Tarihini Giriniz..."
                            name="lastDate"
                        /> */}
                        <Button variant="primary" type="submit">
                            Kaydet
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
