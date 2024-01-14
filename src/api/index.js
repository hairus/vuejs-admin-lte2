import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.test:8080/api/'

});

export default api;