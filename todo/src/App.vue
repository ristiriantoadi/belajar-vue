<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todos v-on:del-todo="delTodo" :todos="todos" />
    <NextPrev v-on:up="up" v-on:down="down"/>
    <p>{{index}}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'
import NextPrev from "./components/NextPrev.vue"

export default {
  name: 'App',
  components: {
    Todos,
    NextPrev
  },
  methods:{
    delTodo(id){
      this.todos = this.todos.filter((x)=>{if (x.id !== id) return x})
    },
    up(){
      this.index++
    },
    down(){
      this.index--
    }
  },
  data:function(){
    return{
      index:0,
      todos:[
        {
          id:1,
          title:"something",
          completed:false
        },
        {
          id:2,
          title:"another",
          completed:false
        },
                {
          id:3,
          title:"another",
          completed:false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
