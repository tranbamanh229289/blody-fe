import axios from "axios";
import storage from './storage'

export const axiosClient = (method:string, url:string, data={})=>{
    const headers:any = {};
    const token:string = storage.getAccessToken();
    if(token){
        headers['Authorization'] = 'Bear' + token;
    }

    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    });
}