import axios from "axios";

const baseUrl = "http://localhost:8080/api/workways";

export default class WorkWayService {
    postWorkWay(workWay) {
        return axios({
            method: "post",
            url: baseUrl + "/add",
            headers: {},
            data: workWay,
        });
    }

    getWorkWays() {
        return axios.get(baseUrl + "/getall");
    }
}
