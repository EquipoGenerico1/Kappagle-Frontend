<template>
  <div class="login">
    <div class="user-pass">
      <h1>Login</h1>
        <div class="login-email">
          <label>Email</label>
          <div class="input email">
            <input type="text" name ="email" v-model="email">
          </div>
        </div>
        <div class="login-pass">
          <label>Password</label>
          <div class="input pass">
            <input type="password" name ="password" v-model="password">
          </div>
        </div>
    </div>
    <div class="button-login">
      <KButton class="button" value="login" @click="login"></KButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";
import axios from "axios";

export default {
  name: 'login',
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
    login: function() {
      axios.post("http://localhost:5000/api/v1/login", {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem("token", JSON.stringify(res.data));
        this.$router
        .push({ path: "checks", query: {} })
        .catch(() => {});

      }).catch(error => {
        console.log(error);
      });

    }
  }
}
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
/**/
h1 {
  font-weight: 700;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  margin-top: 0.2em;
}

.login {
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 6%;
  margin: 0;
}
.login-email {
  margin-bottom: 1.2em;
}
label {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}



</style>