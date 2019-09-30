<template>
  <div id="login">
    
    <h1 class="h1">Login</h1>

    <div class="form">

      <div class="form_content">
        <label class="label" for="email">Correo electrónico</label>
        <div class="form_input">
          <span class="form_icon">
            <font-awesome-icon icon="envelope" />
          </span>
          <input id="email" class="input shadow-sm" :class="{error_input:warning}" type="text" name="email" placeholder="Introduce el correo..." v-model="email" />
        </div>
      </div>

      <div class="form_content">
        <label class="label" for="password">Contraseña</label>
        <div class="form_input">
          <span class="form_icon">
            <font-awesome-icon icon="lock" />
          </span>
          <input id="password" class="input shadow-sm" :class="{error_input:warning}" type="password" name="password" placeholder="Introduce la contraseña..." v-model="password" autocomplete="off" />
        </div>
      </div>
      <p class="error" v-if="warning">Usuario o contraseña incorrecto</p>
    </div>

    <div class="button-login">
      <KButton class="button" value="Acceder" @click="login"></KButton>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";
import requests from "../helpers/axios";

export default {
  name: "login",
  components: {
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
  padding: .5rem;
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

.form_content {
  width: 100%;
  margin-bottom: 2em;
  position: relative;
}

.form_input{
  width: 100%;
}

.label {
  margin-bottom: 1rem;
  display: block;
  font-size: 20px;
}

.input {
  width: 100%;
  padding: 1rem;
  padding-left: 40px;
  border-radius: 4px;
  border: 1px solid #2A6CF1;
  outline: 0;
  font-size: 18px;
}

.input::placeholder,
.input:-moz-placeholder,
.input:-ms-input-placeholder,
.input::-webkit-input-placeholder {
  color:#A8A8A8;
}

.input:focus {
  border-color: rgb(33, 84, 185);
  transition: .5s;
}

.form_icon {
  position: absolute;
  left: .6rem;
  bottom: 1rem;
  color:#A8A8A8;
}

.button {
  width: calc(100% - 1rem);
  height: 4rem;
  position: fixed;
  left: .5rem;
  bottom: .5rem;
  font-size: 30px;
}

@media (min-width: 550px) {
  .button {
    position: static;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
}

.shadow-sm {
 box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.32);
}

.error {
  color: #DF4747;
}

.error_input {
  border-color: #DF4747;
}

</style>