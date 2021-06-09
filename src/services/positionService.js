import axios from "axios";

export default class PositionService {
    baseUrl = "http://localhost:8080/api";

    getPositions() {
        return axios.get(this.baseUrl + "/positions/getdropdown");
    }
}
