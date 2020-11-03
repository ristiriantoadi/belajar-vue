<template>
    <div>
        <h1>Hello world</h1>
        <div>
            <div v-bind:key="todo.id" v-for="todo in todos">
                <TodoItem :todo="todo"/>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: 'Todos',
    components:{
        TodoItem
    },
    props: {
        todos: Object
    },
    methods:{
        toggleCompleted(){

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
a {
color: #42b983;
}
</style>
