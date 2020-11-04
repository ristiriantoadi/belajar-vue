<template>
  <p>{{counter}}</p>
</template>

<script>
export default {
    name:"Counter",
    computed:{
        counter(){
            return this.$store.getters.times(2)
        }
    }
}
</script>

<style>

</style>