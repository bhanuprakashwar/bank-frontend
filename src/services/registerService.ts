import axios from "axios";
import { Register } from "../interface/general";
import { config } from "../const/constants";
export async function createWarAccount(userRegistration: Register) {
    let payload = {
        userName: userRegistration.userName,
        password: userRegistration.password,
        emailId: userRegistration.emailId,
        gender: userRegistration.gender
    }
    return axios.post(`${config.baseURL}${config.openAccount}`, payload)
        .then(response => {
            return response.data
        })
        .catch(error => {
            if ([409, 500].includes(error.response.status)) {
                return error.response.data
            }
            console.error(error);
            throw new Error('Failed to create account');
        });
}