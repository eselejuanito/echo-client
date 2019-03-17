import axios from 'axios';
const API_URL = 'http://localhost:80/data';

export class APIService{
    constructor(){
    }

    getMethod(values) {
        return axios.get(`${API_URL}`, {
            headers: {'Content-Type': 'application/json'},
            params: values,
            data: null
        });
    }

    postMethod(values){
        const url = `${API_URL}`;
        return axios.post(url, values, {
            headers: {'Content-Type': 'application/json'},
            params: values,
            data: null
        });
    }

    putMethod(values){
        const url = `${API_URL}`;
        return axios.put(url, values, {
            headers: {'Content-Type': 'application/json'},
            params: values,
            data: null
        });
    }

    patchMethod(values){
        const url = `${API_URL}`;
        return axios.patch(url, values, {
            headers: {'Content-Type': 'application/json'},
            params: values,
            data: null
        });
    }

    deleteMethod(values){
        const url = `${API_URL}`;
        return axios.delete(url, {
            headers: {'Content-Type': 'application/json'},
            params: values,
            data: null
        });
    }
}