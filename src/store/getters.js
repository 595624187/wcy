export default{
    getObject(state){
        let result = {}
        for(let i=0;i<state.files.length;i++){
            if(state.currentFile===state.files[i].name){
                result = state.files[i]
            }
        }
        return result
    }
}