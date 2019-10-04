<template>
  <div id="login">
    <h1 class="h1">Login</h1>

    <form class="form">
      <inputDefault :complete="'yes'" :icon="'envelope'" :type="'text'" :label="'Correo electrónico'" :name="'email'" @data="getEmail" :state="warning"/>
      <inputDefault :complete="'off'" :icon="'lock'" :type="'password'" :label="'Contraseña'" :name="'password'" @data="getPassword" :state="warning" />
    </form>
    <snackBar @click="warning = !warning" v-if="warning" :color="'dark'" :message="'Las credenciales no coinciden'"></snackBar>
    <div class="button-login">
      <ButtonRoundedLarge class="button" value="Acceder" @click="login"></ButtonRoundedLarge>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import inputDefault from '@/components/inputDefault';
import ButtonRoundedLarge from "@/components/ButtonRoundedLarge";
import snackBar from '@/components/snackBar';
import requests from "@/helpers/axios";

export default {
  name: "login",
  components: {
    inputDefault,
    ButtonRoundedLarge,
    snackBar
  },
  data() {
    return {
      email: "",
      password: "",
      warning: false
    };
  },
  methods: {
    getEmail(email) {
      this.email = email;
    },
    getPassword(password) {
      this.password = password;
    },
    login() {
      requests
        .login(this.email, this.password)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));
          this.$router.push({ path: "landing", query: {} }).catch(() => {});
        })
        .catch(error => {
          this.warning = true;
          this.email='';
          this.password='';
        });
    }
  }
};
</script>

<style scoped>
#login {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20px;
}

.h1 {
  width: 100%;
  margin-bottom: 1.2em;
  text-align: center;
  font-weight: lighter;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: calc(100% - 2rem);
  height: 4rem;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
}

@media (min-width: 550px) {
  #login,
  .button {
    position: absolute;
    width: 500px;
    left: 50%;
    margin: 0 0 0 -250px;
  }
}

</style>