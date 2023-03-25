import axios from 'axios';
import bcrypt from 'bcryptjs';
export async function fetchLoginService(userName:string, password:string){
    const loginURL = "http://localhost:8000/login"
    const hashpassword = await bcrypt.hash(password,12);
    axios.post(loginURL,{userName,password:hashpassword}).then((response:any)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error)
    })

}