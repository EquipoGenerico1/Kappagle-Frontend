<template>
  <div class="login">
    <div class="user-pass">
      <div class="login-email">
        <label>email</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div class="login-pass">
        <label>Password</label>
        <input type="text" name="password" v-model="password" />
      </div>
    </div>
    <div class="button-login">
      <KButton class="button" value="login" @click="guacamole"></KButton>
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
      password: ""
    };
  },
  methods: {
    guacamole: function() {
      requests
        .login(this.email, this.password)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.button {
  flex-basis: 100%;
  height: 10vh;
  width: calc(100% - 10px);
  position: fixed;
  left: 5px;
  bottom: 5px;
}
</style>