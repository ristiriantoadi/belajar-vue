<template>
  <button @click="increment">Up</button>
</template>

<script>
export default {
    name:"Up",
    methods:{
      increment(){
        this.$store.commit('increment')
      }
    }
}
</script>

<style>

</style>