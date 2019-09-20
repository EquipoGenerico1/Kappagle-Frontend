const url = "http://localhost:5000/api/v1"
import axios from "axios";

var requests = {
    login(email, password) {
        return axios.post(`${url}/login`, {
            email: email,
            password: password
        });
    },
    checks() {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/checks`, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    },
}


export default requests