import axios from "axios";

export const api = axios.create({
    baseURL: "https://reqres.in/",
    headers:null,
    headers: {"Content-Type": "application/json"}
});

async function ListUsers(params) {
    return new Promise(async (resolve, reject) => {
        await api.get("/api/users", {
            params: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })
};

export { ListUsers };