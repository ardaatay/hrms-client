import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export default class WorkWayService {
    postWorkWay(workWay) {
        return axios({
            method: "post",
            url: baseUrl + "/workways/add",
            headers: {},
            data: workWay,
        });
    }
}
