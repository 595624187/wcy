<template>
  <div class="testBody">
    <div class="testContent">
      <form action="" :key="test.index">
        <span>{{test.index}}.(
          {{getType(test.type)}}){{test.title}}
        </span>
        <label for="optionA" :class="{labActive:test.data[0].state}">
          <input type="checkbox" id="optionA"
                 :checked="test.data[0].state"
                 @click="checkClick(index=0,test.type,$event)"> A {{test.data[0].detail}}
        </label>
        <label for="optionB" :class="{labActive:test.data[1].state}">
          <input type="checkbox"  id="optionB"
                 :checked="test.data[1].state"
                 @click="checkClick(index=1,test.type,$event)"> B {{test.data[1].detail}}
        </label>
        <label for="optionC" :class="{labActive:test.data[2].state}">
          <input type="checkbox"  id="optionC"
                 :checked="test.data[2].state"
                 @click="checkClick(index=2,test.type,$event)"> C {{test.data[2].detail}}
        </label>
        <label for="optionD" :class="{labActive:test.data[3].state}">
          <input type="checkbox"  id="optionD"
                 :checked="test.data[3].state"
                 @click="checkClick(index=3,test.type,$event)"> D {{test.data[3].detail}}
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "testBody",
  data(){
    return{
    }
  },
  props:{
    test:{
      type:Object,
      default:'',
    }
  },
  computed:{
    getType(){
      return function(type){
        if(type==='simple'){
          return '单选'
        }else if(type==='multiple'){
          return '多选'
        }
      }
    }
  },
  methods:{
    checkClick(index,type,event){
      if(type==='multiple'){
        this.test.data[index].state= event.target.checked
      }else if(type==='simple'){
        for(let i=0;i<this.test.data.length;i++){
          if(i===index)
            this.test.data[index].state= event.target.checked
          else
            this.test.data[i].state = false
        }
      }
    },

  },


}
</script>

<style scoped>
.testBody{
  width:1000px;
  height:660px;
  display:flex;
  justify-content: center;
  padding-top:30px;
}
.testContent{
  width:80%;
  font-size: 20px;
}
.testContent form{
  width: 100%;
  height:90%;
  display: flex;
  flex-direction: column;
}
.testContent span{
  height: 30%;
  border: 1px #ff5777 solid;
  padding:10px;
  border-radius: 10px;
}
.testContent label{
  padding:10px;
  margin: 10px 0 10px 0;
  border: 1px goldenrod solid;
  border-radius: 10px;
}
.testContent label:hover{
  cursor: pointer;
  background: rgba(0, 128, 0, 0.73);
  color:white;
}
.labActive{
  background: rgba(0, 128, 0, 0.73);
  color:white;
}
.testContent input[type="checkbox"]{
}

</style>