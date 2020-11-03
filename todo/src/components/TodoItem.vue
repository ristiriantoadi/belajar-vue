<template>
    <p @click="toggleCompleted" :class="{'is-complete':todo.completed}">
        {{todo.title}}
        <button @click="$emit('del-todo',todo.id)">Hapus</button>
    </p>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object
    },
    methods:{
        toggleCompleted(){
            this.todo.completed = !this.todo.completed
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
.is-complete{
    text-decoration: line-through;
}
</style>
