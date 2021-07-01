import axios from "axios";

const baseUrl = "http://localhost:8080/api/customers";

export default class CustomerService {
    postCustomer(customer) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: customer,
        });
    }

    getResumesByJobSeekerId(jobSeekerId) {
        return axios.get(baseUrl + "/getresumesbyjobseekerid", {
            params: { jobSeekerId },
        });
    }

    getResumeById(id) {
        return axios.get(baseUrl + "/getresumebyid", {
            params: { id },
        });
    }
}
