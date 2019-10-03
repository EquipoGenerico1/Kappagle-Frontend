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
    currentCheck() {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/checks/current-check`, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    },
    checkIn() {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.post(`${url}/users/checks/checkin`, {}, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    },
    checkOut() {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.patch(`${url}/users/checks/checkOut`, {}, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    }, 
    getUsers(name = "") {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users`, {
            params: {
                name
            },
            headers: {
                Authorization: `Bearer ${token["access_token"]}`,
            }
        });
    },
    editUser(data) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.patch(`${url}/users/edit`, data, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    },
    imageProfile(file) {
        let token = JSON.parse(localStorage.getItem("token"));
        const formData = new FormData();
        formData.append('avatar',file);
        console.log(file)

        console.log(formData)
        return axios.post(`${url}/users/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    },
    myProfile() {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    }
}


export default requests