import axios from "axios";

const baseUrl = "http://localhost:8080/api/cities";

export default class CityService {
    getCities() {
        return axios.get(baseUrl + "/getall");
    }
}
