<template>
  <button @click="decrement">Down</button>
</template>

<script>
export default {
    name:"Down",
    methods:{
      decrement(){
        this.$store.commit('decrement')
      }
    }
}
</script>

<style>

</style>