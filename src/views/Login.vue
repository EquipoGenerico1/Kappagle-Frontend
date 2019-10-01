<template>
  <div id="login">
    <h1 class="h1">Login</h1>

    <div class="form">
      <inputDefault :type="'email'" :label="'Correo electrónico'" :name="'email'" @data="email" />
      <inputDefault :type="'password'" :label="'Contraseña'" :name="'password'" @data="password" />
      <p class="error" v-if="warning">Usuario o contraseña incorrecto</p>
    </div>

    <div class="button-login">
      <KButton class="button" value="Acceder" @click="login"></KButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inputDefault from '@/components/inputDefault';
import KButton from "../components/Button";
import requests from "../helpers/axios";
import inputDefaultVue from '../components/inputDefault.vue';

export default {
  name: "login",
  components: {
    inputDefault,
    KButton
  },
  data() {
    return {
      email: "",
      password: "",
      warning: false
    };
  },
  methods: {
    login: function() {
      requests
        .login(this.email, this.password)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));
          this.$router.push({ path: "checks", query: {} }).catch(() => {});
        })
        .catch(error => {
          this.warning = true;
        });
    }
  }
};
</script>

<style scoped>
#login {
  padding: 0.5rem;
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
  width: calc(100% - 1rem);
  height: 4rem;
  position: fixed;
  left: 0.5rem;
  bottom: 0.5rem;
  font-size: 30px;
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

.error {
  color: #df4747;
}

.error_input {
  border-color: #df4747;
}
</style>