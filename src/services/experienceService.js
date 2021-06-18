import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class ExperienceService {
    postExperience(experience) {
        return axios({
            method: "post",
            url: baseUrl + "/experiences/add",
            headers: {},
            data: experience,
        });
    }
}
