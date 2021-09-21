import axios from "axios";
import qs from "query-string";

const configAPI = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "content-type": "application/json"
    },
    paramsSerializer: (params) => qs.stringify(params)
});

configAPI.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

configAPI.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default configAPI;
