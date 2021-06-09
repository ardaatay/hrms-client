import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class PositionService {
    getPositions() {
        return axios.get(baseUrl + "/positions/getdropdown");
    }
}
