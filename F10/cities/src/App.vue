<template>
  <div id="app">
    <div class="card-deck">
      <City v-for='mycity in cities' :city='mycity' :key='mycity.name'></City>
    </div>
  </div>
</template>

<script>
import City from '@/components/City.vue';

export default {
  name: 'App',
  components: {
    City
  },
  data(){
    return{
      cities: [],
    }
  },
  created(){
    this.cities.push(
      {
        name: 'Porto',
        link:'https://i0.statig.com.br/bancodeimagens/5l/eb/sa/5lebsabb3aqcx1upuu5nwzibw.jpg',
      },
      {
        name: 'Turim',
        link:'https://upload.wikimedia.org/wikipedia/commons/6/62/Turin_monte_cappuccini.jpg',
      },
      {
        name: 'Londres',
        link:'https://www.euandopelomundo.com/wp-content/uploads/2015/03/londres_big_ben.jpg',
      },
      {
        name: 'Valeta',
        link:'https://ci-prod.imgix.net/upload/galeriadeimagens/00203074.jpg',
      },
      {
        name: 'Alpes suíços',
        link:'https://ci-prod.imgix.net/upload/galeriadeimagens/00203074.jpg',
      },
    )
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
