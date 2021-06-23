import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class ResumeService {
    postResume(resume) {
        return axios({
            method: "post",
            url: baseUrl + "/resumes/add",
            headers: { "content-type": "text/json" },
            data: resume,
        });
    }

    getResumesByJobSeekerId(jobSeekerId) {
        return axios.get(baseUrl + "/resumes/getresumesbyjobseekerid", {
            params: { jobSeekerId },
        });
    }

    getResumeById(id) {
        return axios.get(baseUrl + "/resumes/getresumebyid", {
            params: { id },
        });
    }
}
