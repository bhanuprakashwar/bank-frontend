import axios from 'axios';
export async function fetchLoginService(userName:string, password:string){
    const loginURL = "http://localhost:3000/auth/login"
    axios.post(loginURL,{userName,password}).then((response:any)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error)
    })
}