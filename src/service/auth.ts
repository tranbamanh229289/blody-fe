import { axiosClient } from "./api";
import storage from "./storage";

interface IUser{
    username: string,
    password: string
}
export const login = async (data:IUser) => {
    try{
        const res: any = await axiosClient('post', '/login', data);
        storage.setAccessToken(res.data?.access_token);
    } catch(error) {
        throw(error)
    }
}

export const logout= async () => {
    storage.deleteAccessToken();
}