import axios from "axios";

const baseUrl = "http://localhost:8080/api/schools";

export default class SchoolService {
    postSchool(school) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: school,
        });
    }

    deleteSchool(id) {
        return axios.delete(baseUrl + "/delete", { params: { id } });
    }
}
