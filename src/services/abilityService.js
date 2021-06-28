import axios from "axios";

const baseUrl = "http://localhost:8080/api/abilities";

export default class AbilityService {
    postAbility(ability) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: ability,
        });
    }

    deleteAbility(id) {
        return axios.delete(baseUrl + "/delete", {
            params: { id },
        });
    }
}
