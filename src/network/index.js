import axios from 'axios'

export function getD(){
    return axios({
        url:'http://localhost:9999/api/movie',
        type:'post',
    })
}

export function getMovies(){
    return axios({
        url:'http://localhost:9999/api/movie',
        type:'post',
    })
}
export function getLists(){
    return axios({
        url:'http://localhost:9999/api/chapter',
        type:'get'
    })
}
export function getTests(id){
    return axios({
        url:'http://localhost:9999/api/subject/'+id,
        type:'get'
    })
}