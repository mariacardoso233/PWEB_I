<template>
  <div>
    <h2>Insert Game</h2>
    <form>
      <!--NOME DO JOGO-->
      <div class="form-group">
        <label for="gameName">Nome:</label>
        <input
          v-model="game.name"
          type="text"
          id="txtGameName"
          class="form-control"
          required
        />
      </div>
      <br />

      <!--GÉNERO DO JOGO-->
      <div class="form-group">
        <label for="gameGenre">Género:</label>
        <select v-model="game.genre" id="sltGenre">
          <!--Colocar o array dos géneros no seletor-->
          <option :value="gender" :key="i" v-for="(genre, i) in genres">
            {{ genre }}
          </option>
        </select>
      </div>
      <br />

      <!--ANO DO JOGO-->
      <div class="form-group">
        <label for="gameEdition">Ano de edição:</label>
        <input
          v-model="game.yearEdition"
          type="number"
          id="txtGameEdition"
          class="form-control"
        />
      </div>
      <br />

      <!--DISCRIÇÃO DO JOGO-->
      <div class="form-group">
        <label for="gameEdition">Descrição:</label><br />
        <textarea
          v-model="game.description"
          id="txtGamedescription"
          class="form-control"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <br />

      <!--CAPA DO JOGO-->
      <div class="form-group">
        <label for="gameCover">Capa do jogo:</label>
        <input
          v-model="game.cover"
          type="url"
          id="txtGameCover"
          class="form-control"
          required
        />
      </div>
      <br />
      <div class="form-group">
        <label for="gameLikes">Nº de gostos:</label><br />
        <input
          v-model="game.likes"
          type="number"
          class="form-control"
          id="gameLikes"
          readonly
        />
      </div>
      <br />
      <button type="submit" @click="submitGame" class="btn btn-primary">
        Inserir
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "InsertGame",
  data() {
    return {
      genres: [
        "Ação",
        "Aventura",
        "Estratégia",
        "RPG",
        "Desportos",
        "Simulação",
        "Outros",
      ],
      game: {
        id: 0,
        name: "",
        genre: "",
        yearEdition: "",
        description: "",
        cover: "",
        likes: 0,
      },
    };
  },
  methods: {
    submitGame(event) {
      event.preventDefault();

      let games = [];
      if (localStorage.getItem("games")) {
        games = JSON.parse(localStorage.getItem("games"));

        this.game.id = games.length > 0 ? games[games.length - 1].id + 1 : 1;

        games.push(this.game);
        localStorage.setItem("games", JSON.stringify(games));
        alert("Jogo inserido com sucesso!!");

        this.game = {
          id: 0,
          name: "",
          gender: "",
          year: null,
          description: "",
          cover: "",
          likes: 0,
        };
      }
    },
  },
};
</script>