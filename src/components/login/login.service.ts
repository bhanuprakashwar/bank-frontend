import axios from 'axios';
export async function fetchLoginService(userName:string, password:string){
    const loginURL = "http://localhost:3000/auth/login"
    return axios.post(loginURL,{userName,password}).then((response:any)=>{
        return response.data;
    }).catch((error)=>{
        if([401,404,500].includes(error.response.status)){
            return error.response.data;
        }
        console.log(error);
    });
}