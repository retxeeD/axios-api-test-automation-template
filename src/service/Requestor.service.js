import axios from "axios";
import { activePoxy, proxy } from "../DataUtils.js";

const api = axios.create({
    validateStatus: function (status) {
        return status;
    },
    proxy: proxy[activePoxy]
});

async function Post(body, headers, baseURL, endpoint) {
    return new Promise((resolve, reject) => {
        api.post(endpoint, body, {
            baseURL: baseURL,
            headers: headers
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

async function Get(queryParams, pathParams, headers, baseURL, endpoint) {
    return new Promise((resolve, reject) => {
        api.get(endpoint, {
            baseURL: baseURL,
            headers: headers,
            params: queryParams,
            urlParams: pathParams
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}


export { Post, Get };