import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class ResumeService {
    postResume(resume) {
        return axios({
            method: "post",
            url: baseUrl + "/resumes/add",
            headers: {},
            data: resume,
        });
    }
}
