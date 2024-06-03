import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:8018/shipmentTracking/v1',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});

export default api;
