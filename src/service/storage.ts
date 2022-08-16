const ACCESS_TOKEN:string = 'accessToken';
export default {
    getAccessToken(){
        return JSON.parse(localStorage.getItem(ACCESS_TOKEN)||'') ;
    },
    setAccessToken(token:string){
        return localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token));
    },
    deleteAccessToken(){
        localStorage.removeItem(ACCESS_TOKEN);
    }
}