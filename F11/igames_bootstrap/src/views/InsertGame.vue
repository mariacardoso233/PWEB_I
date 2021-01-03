<template>
  <b-container>
    <h2>Adicionar novo jogo</h2>
    <b-card bg-variant="light">
      <b-form @submit.prevent="onSubmit">
        <!--NOME DO JOGO-->
        <b-form-group
          label="Nome do jogo:"
          label-align-sm="left"
          label-for="txtName"
        >
          <b-form-input
            id="txtName"
            type="text"
            v-model="form.name"
            
          ></b-form-input>
        </b-form-group>

        <!--GÉNERO DO JOGO-->
        <b-form-group label="Género:" label-align="left" label-for="sltGenre">
          <b-form-select
            id="sltGenre"
            placeholder="Selecione um género"
            v-model="form.genre"
            :options="genres"
            required
          ></b-form-select>
        </b-form-group>

        <!--ANO DO JOGO-->
        <b-form-group
          label="Ano do jogo:"
          label-align-sm="left"
          label-for="txtYear"
        >
          <b-form-input
            id="txtYear"
            v-model="form.year"
            type="number"
          ></b-form-input>
        </b-form-group>

        <!--DESCRIÇÃO DO JOGO-->
        <b-form-group
          label="Descrição:"
          label-align-sm="left"
          label-for="txtDescription"
        >
          <b-form-textarea
            id="txtDescription"
            v-model="form.description"
            type="text"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <!--CAPA DO JOGO-->
        <b-form-group
          label="Capa do jogo:"
          label-align-sm="left"
          label-for="urlCover"
        >
          <b-form-input
            id="urlCover"
            v-model="form.cover"
            type="url"
            required
          ></b-form-input>
        </b-form-group>

        <!--LIKES DO JOGO-->
        <b-form-group label="Likes:" label-align-sm="left" label-for="txtLikes">
          <b-form-input
            id="txtLikes"
            v-model="form.likes"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success"
          >Adicionar</b-button
        >
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
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
      form: {
        name: "",
        genre: "",
        year: "",
        description: "",
        cover: "",
        likes: 0,
      },
      games: JSON.parse(localStorage.games)
    };
  },
  methods: {
    onSubmit() {
      this.games.push(this.form);
      localStorage.games = JSON.stringify(this.games);
    },
  },
};
</script>
