import axios from "axios";
import { Register } from "../interface/general";
import { config } from "../const/constants";
import bcrypt from "bcryptjs";
export async function createWarAccount(userRegistration: Register) {
    delete userRegistration.confirmPassword;
    userRegistration.password = await bcrypt.hash(userRegistration.password, 12);
    return axios.post(`${config.baseURL}${config.openAccount}`, userRegistration)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error);
            throw new Error('Failed to create account');
        });
}