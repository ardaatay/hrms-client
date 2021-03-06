import axios from "axios";

const baseUrl = "http://localhost:8080/api/resumes";

export default class ResumeService {
    postResume(resume) {
        resume.jobSeekerId = 1;

        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: resume,
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
