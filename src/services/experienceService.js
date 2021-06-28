import axios from "axios";

const baseUrl = "http://localhost:8080/api/experiences";

export default class ExperienceService {
    postExperience(experience) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: experience,
        });
    }

    deleteExperience(id) {
        return axios.delete(baseUrl + "/delete", { params: { id } });
    }
}
