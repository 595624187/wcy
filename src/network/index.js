import{request} from './request'
export function getData(){
    return request({
        url:'/all'
    })
}
export function getHomeData(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}