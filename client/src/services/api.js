import axios from "axios";

const API_LINK = "https://verify-service-5730-dev.twil.io";

const API = axios.create({
    baseURL: API_LINK,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export default API;
