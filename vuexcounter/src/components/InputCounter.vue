<template>
    <div>
        <input type="number" v-model="counter">
        <button @click="changeCounter">Change counter</button>
    </div>
</template>

<script>
export default {
    name:"Counter",
    data:()=>{
        return {
            counter:0
        }
    },
    methods:{
        changeCounter(){
            this.$store.dispatch('changeCounter',this.counter)
        }
    }
}
</script>

<style>

</style>