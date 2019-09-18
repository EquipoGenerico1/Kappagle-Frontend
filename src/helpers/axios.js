const url = "http://localhost:5000/api/v1"
import axios from "axios";

var requests = {
    login(email, password) {
        return axios.post(`${url}/login`, {
            email: email,
            password: password
        });
    }
}


export default requests