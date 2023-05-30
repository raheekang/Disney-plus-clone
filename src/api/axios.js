import axios from 'axios' ;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"da4ba86efcb80631e0ac7c737fdda570",
        langguage:"ko-KR"
    }
})

export default instance; 