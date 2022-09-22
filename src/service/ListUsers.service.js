import axios from "axios";
import { dataUtils, env } from "../DataUtils.js";

export const api = axios.create({
    baseURL: dataUtils[env].BASE_URL_GET,
    headers:null,
    headers: {"Content-Type": "application/json"}
});

async function ListUsers(params) {
    return new Promise(async (resolve, reject) => {
        await api.get(dataUtils[env].END_POINT_GET, {
            params: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })
};

export { ListUsers };