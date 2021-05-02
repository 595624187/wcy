import axios from 'axios'
axios.defaults.withCredentials=true
axios.defaults.crossDomain=true
axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded'
export function request(config){
    const instance = axios.create({
        baseURL:'http://192.168.1.100:8000',
        timeout:5000
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })
    return instance(config)
}