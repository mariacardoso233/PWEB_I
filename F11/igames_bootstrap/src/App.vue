<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      games: [],
    };
  },
  created() {
    if (!localStorage.games) {
      this.games.push({
        id: 1,
        name: "Animal Crossing",
        genre: "RPG",
        year: "2001",
        description: "Great Game",
        cover: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg",
        likes: 100,
      });
      this.games.push({
        id: 2,
        name: "Golden Axe",
        genre: "Aventura",
        year: "1995",
        description: "great game",
        cover: "https://i.ytimg.com/vi/ISZ5N1i7lA0/maxresdefault.jpg",
        likes: 2,
      });

      localStorage.games = JSON.stringify(this.games);
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
