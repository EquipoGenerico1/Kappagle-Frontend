// const url = "https://kappagle-backend.herokuapp.com/api/v1"
const url = "http://localhost:5000/api/v1"

import axios from "axios";
import { saveAs } from "file-saver";

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
    checksFromId(id) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/${id}/checks`, {
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
    }, getUsers(name = "") {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users`, {
            params: {
                name
            },
            headers: {
                Authorization: `Bearer ${token["access_token"]}`,
            }
        });
    }, getPdfUser(from, to) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/pdf`,
            {
                responseType: 'blob',
                params: { from, to },
                headers: { Authorization: `Bearer ${token["access_token"]}`, }
            })
            .then(res => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                const filename = "entradas y salidas desde " + from + " hasta " + to + ".pdf";
                saveAs(pdfBlob, filename);
            })
            .catch(res => { });
    }, getPdfAdmin(from, to, user) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/${user._id}/pdf`,
            {
                responseType: 'blob',
                params: { from, to },
                headers: { Authorization: `Bearer ${token["access_token"]}`, }
            })
            .then(res => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                const filename = "entradas y salidas de " + user.name + " deesde " + from + " hasta " + to + ".pdf";
                saveAs(pdfBlob, filename);
            })
            .catch(res => { });
    }
    , getUser(id) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    }
    , getHoursFromUser(id) {
        let token = JSON.parse(localStorage.getItem("token"));
        return axios.get(`${url}/users/${id}/worked-hours?from=1/1/1970&to=24/09/2020`, {
            headers: {
                Authorization: `Bearer ${token["access_token"]}`
            }
        });
    }

}


export default requests