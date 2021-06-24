import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class AbilityService {
    postAbility(ability) {
        return axios({
            method: "post",
            url: baseUrl + "/abilities/add",
            headers: {},
            data: ability,
        });
    }
}
