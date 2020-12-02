<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <City/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    City
  },
  cities:[],
  data(){
    this.cities.push(
      {
        id: 1,
        name: 'Porto',
        link:'https://i0.statig.com.br/bancodeimagens/5l/eb/sa/5lebsabb3aqcx1upuu5nwzibw.jpg'
      },
      {
        id: 2,
        name: 'Guarda',
        link:'https://media-manager.noticiasaominuto.com/1920/naom_5c8a221659795.jpg'
      },
      {
        id: 3,
        name: 'Lisboa',
        link:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/1200px-Lisbon_%2836831596786%29_%28cropped%29.jpg'
      },
      {
        id: 4,
        name: 'Alentejo',
        link:'https://media-manager.noticiasaominuto.com/1920/naom_5c5bfc2e80694.jpg'
      },
    )
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
