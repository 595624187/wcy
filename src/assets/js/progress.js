import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({showSpinner:false})
this.$router.beforeEach((to,from,next)=>{
    NProgress.start()
    next()
})
this.$router.afterEach(()=>{
    NProgress.done()
})

