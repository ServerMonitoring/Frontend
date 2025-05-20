import axios from "axios"
import { api } from "./config"

export function singup(){
    axios.post(`${api}/auth/sign_in`)
}
export function singin(){
    
}