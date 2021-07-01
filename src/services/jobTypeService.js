import axios from "axios";

const baseUrl = "http://localhost:8080/api/jobtypes";

export default class JobTypeService {
    getJobTypes() {
        return axios.get(baseUrl + "/getall");
    }
}
