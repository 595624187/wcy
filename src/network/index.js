import axios from 'axios'
export  {
    getData,
    postTest,
    requestTest,
    addUser
}

function postTest(){
    return axios({
        url:'http://localhost:8080/add',
        type:'post',
        contentType:'application/json',
        data:JSON.stringify({
            name:'wcy',
            age:12,
            email:'aaa@qq.com'
        }),

    })
}

function getData(){
    return axios.get('http://localhost:8080/all')
}

function requestTest(){
    return axios({
        methods:'request',
        url:'http://localhost:8080'
    })
}

function addUser(){
    return axios({
        methods:'get',
        url:'http://localhost:8080/add1'
    })
}

