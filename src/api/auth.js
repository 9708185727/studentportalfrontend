import axios from "axios"
import config from "../config/config"

const login=async({email,password})=>{
   
const response=await axios.post(`${config.BaseApiUrl}/api/auth/login`,{email,password})
console.log(response)
return response;
}
const register=async({name,phone,batch,email,password,confirmPassword})=>{
    const response=await axios.post(`${config.BaseApiUrl}/api/auth/register`,{name,phone,batch,email,password,confirmPassword})
    return response;
    }
export {login,register}