import axios from "axios";

const baseUrl = "http://localhost:8080/api/languages";

export default class LanguageService {
    postLanguage(language) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: language,
        });
    }

    deleteLanguage(id) {
        return axios.delete(baseUrl + "/delete", { params: { id } });
    }
}
