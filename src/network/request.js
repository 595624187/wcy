// import axios from 'axios'
// import {Notify} from 'vant'
// // export function request(config){
// //     const instance = axios.create({
// //         baseURL:'http://localhost:8080',
// //         timeout:5000
// //     })
// //     instance.interceptors.request.use(config=>{
// //         return config
// //     },err=>{
// //
// //     })
// //     instance.interceptors.response.use(res=>{
// //         return res.data
// //     },err=>{
// //         console.log(err)
// //     })
// //     return instance(config)
// // }
// const requests = axios.create({
//     baseURL:'http://localhost:8080',
//     timeout:3000
// })
// const err = (error) => {
//     if (error.response) {
//         const data = error.response.data
//         // const token = Vue.ls.get(ACCESS_TOKEN)
//         if (error.response.status === 403) {
//             Notify({ type: 'danger', message: data.message||data.msg });
//         }
//         if (error.response.status === 401) {
//             Notify({ type: 'danger', message: '你没有权限。' });
//             // if (token) {
//             //   store.dispatch('Logout').then(() => {
//             //     setTimeout(() => {
//             //       window.location.reload()
//             //     }, 1500)
//             //   })
//             // }
//         }
//     }
//     return Promise.reject(error)
// }
//
// requests.interceptors.request.use(config => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
//     }
//     return config
// }, err)
//
// requests.interceptors.response.use((response) => {
//     const res = response.data
//     if (res.code !== 0&&res.code!==200) {
//         Notify({ type: 'danger', message: res.message||res.msg });
//         // 401:未登录;
//         if (res.code === 401||res.code === 403||res.code===999) {
//             Notify({ type: 'danger', message: '请登录'});
//         }
//         return Promise.reject('error')
//     } else {
//         return res
//     }
// }, err)
//
// export default{
//     requests
// }