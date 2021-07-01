import axios from "axios";

const baseUrl = "http://localhost:8080/api/jobadvertisements";

export default class JobService {
    postJob(job) {
        job.customerId = 2;
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: job,
        });
    }
}
