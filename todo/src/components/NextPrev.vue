<template>
  <div>
    <button @click="$emit('up')">Next</button>
    <button @click="$emit('down')">Prev</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  },
  methods:{
    delTodo(id){
      this.todos = this.todos.filter((x)=>{if (x.id !== id) return x})
    }
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
