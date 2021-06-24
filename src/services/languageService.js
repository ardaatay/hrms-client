import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class LanguageService {
    postLanguage(language) {
        return axios({
            method: "post",
            url: baseUrl + "/languages/add",
            headers: {},
            data: language,
        });
    }
}
