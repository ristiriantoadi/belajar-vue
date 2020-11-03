<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todos :todos="todos" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  },
  data:function(){
    return{
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
