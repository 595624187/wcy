export default{
    getObject(filename){
        let result = {}
        for(let item in this.state.files){
            if(item.name===filename){
                result = item
            }
        }
        return result
    }
}