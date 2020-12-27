<template>
  <div id="register">
      <form @submit.prevent="register">
          Username: <input type="text" id="txtUsername" v-model="username"><br>
          Password: <input type="password" id="txtPassword" v-model="password"><br>
          Location: <input type="text" id="txtLocation" v-model="location"><br>
          <input type="submit" value="REGISTER">
      </form>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return{
            username: "",
            password: "",
            location: ""
        }
    },
    methods: {
        register(){
            try {
                //Chamar a ação "login" que está na store
                // this.$store.dispatch('login',{username: this.username, password: this.password})
                this.$store.dispatch('register',this.$data)

                // direcionar para uma página (neste caso, página "home")
                this.$router.push({name: 'Login'})

            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>

<style>

</style>