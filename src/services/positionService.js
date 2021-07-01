import axios from "axios";

const baseUrl = "http://localhost:8080/api/positions";

export default class PositionService {
    getPositions() {
        return axios.get(baseUrl + "/getall");
    }
}
