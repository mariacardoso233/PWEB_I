<template>
  <div id="app">
    <h1>Contador</h1>
    <button @click='dec()'>-</button>
    <span> {{count}} </span>
    <button @click='inc()'>+</button>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    dec(){
      return this.$store.dispatch('decrement')
    },
    inc(){
      return this.$store.dispatch('increment')
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  }
};
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
