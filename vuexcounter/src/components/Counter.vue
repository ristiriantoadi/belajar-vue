<template>
  <p class="another" :class="{active:isActive,something:isSomething}">{{counter}}</p>
</template>

<script>
export default {
    name:"Counter",
    data(){
        return{
            // isActive:true,
            // isSomething:false
        }
    },
    methods:{
    },
    computed:{
        counter(){
            return this.$store.getters.times(2)
        },
        isActive(){
            return true
        },
        isSomething(){
            return true
        }
    }
}
</script>

<style>

</style>