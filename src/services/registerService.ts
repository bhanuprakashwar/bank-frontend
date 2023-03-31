import axios from "axios";
import { Register } from "../interface/general";
import { config } from "../const/constants";

export function createWarAccount(userRegistration: Register) {
    return axios.post(`${config.baseURL}${config.openAccount}`, userRegistration)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw new Error('Failed to create account');
        });
}