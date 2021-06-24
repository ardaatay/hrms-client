import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class SchoolService {
    postSchool(school) {
        return axios({
            method: "post",
            url: baseUrl + "/schools/add",
            headers: {},
            data: school,
        });
    }
}
