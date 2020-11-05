<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Counter/>
    <Up/>
    <Down/>
    <InputCounter/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Up from './components/Up.vue'
import Down from './components/Down.vue'
import InputCounter from './components/InputCounter.vue'


export default {
  name: 'App',
  components: {
    Counter,
    Up,
    Down,
    InputCounter
  },
  computed:{
    counter(){
      return this.$store.state.counter
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
