<template>
  <div id="app">
    <div class="navbar" :class="!showNav ? 'shadow' : null" v-if="page && role">
      <div class="nav-title">{{page}}</div>
      <div class="nav-icon" @click="showNav = !showNav" v-if="role != 'NO_ROLE'">
        <font-awesome-icon icon="bars" class="menu-icon" />
      </div>
      <div class="nav-icon" v-else>
        <font-awesome-icon icon="user" class="menu-icon" />
      </div>
    </div>
    <div class="navbar-menu" v-if="showNav && role != 'NO_ROLE'" :class="showNav ? 'shadow' : null">
      <ul class="navbar-menu-list">
        <li @click="showNav = false">
          <router-link to="/users">
            <span><font-awesome-icon icon="users" /></span>
            Empleados
          </router-link>
        </li>
        <li @click="showNav = false">
          <router-link to="/landing">
            <span><font-awesome-icon icon="user-clock" /></span>
            Fichar
          </router-link>
        </li>
        <li @click="showNav = false">
          <router-link to="/history">
            <span><font-awesome-icon icon="history" /></span>
            Historial
          </router-link>
        </li>
        <li @click="showNav = false">
          <router-link to="/myProfile">
            <span><font-awesome-icon icon="user-circle" /></span>
            Mi perfil
          </router-link>
        </li>
        <li @click="logOut()">
          <router-link to="#">
            <span><font-awesome-icon icon="sign-out-alt" /></span>
            Cerrar Sesión
          </router-link>
        </li>
      </ul>

    </div>
    <router-view :id="page ? 'view': 'login'" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "app",
  components: {},
  data() {
    return {
      showNav: false,
      page: null,
      role: null
    };
  },
  methods: {
    setViewName(name) {
      switch (name) {
        case "landing":
          this.page = "Fichar";
          break;
        case "myProfile":
          this.page = "Mi perfil";
          break;
        case "users":
          this.page = "Empleados";
          break;
        case "history":
          this.page = "Mi Historial";
          break;
      }
    },
    getRole() {
      let token = JSON.parse(localStorage.getItem("token"));
      try {
        if (token["role"]) {
          this.role = token.role;
        }
      } catch (error) {
        this.role = "NO_ROLE";
      }
    },
    logOut() {
      localStorage.removeItem("token");
      this.page = null;
      this.showNav = false;
      this.role = null;
      this.$router.push("/login");
    }
  },
  created: function() {
    this.getRole();
    this.setViewName(this.$router.history.current.name);
  },
  updated: function() {
    this.setViewName(this.$router.history.current.name);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

html,
body,
#app {
  font-family: "Roboto", sans-serif;
  height: 100%;
  background-color: #fcfcfc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: white;
  text-decoration: none;
}

#login {
  height: 100%;
}

#view {
  height: calc(100% - 70px);
}

.navbar-container {
  height: 100%;
}

.navbar {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #15387B;
  color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.32);
}

.nav-icon {
  flex-basis: 10%;
  text-align: center;
}

.nav-title {
  font-size: 24px;
}

.menu-icon {
  font-size: 24px;
}

.navbar-menu {
  padding: 1rem .5rem;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.32);
}

.navbar-menu-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;

}

.navbar-menu-list li{
  width: 100%;
  margin-bottom: 0.7rem;
  font-size: 20px;
  text-decoration: none;
}

.navbar-menu-list li:nth-last-child(1){
  margin-bottom: 0;
}

.navbar-menu-list li a{
  width: 100%;
  display: block;
  color: #222;
}

.navbar-menu-list li a:hover,
.navbar-menu-list li a:focus{
  color: #929292;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.navbar-menu-list li a:active {
  transition: ease-in 150ms;
}

.navbar-menu-list li span{
  width: 70px;
  padding-right: .5rem;
  display: inline-block;
  text-align: center;
}

.shadow-sm {
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.32);
}

.shadow {
  -webkit-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
}

.hidde{
  display: none;
}

/* Ripple effect */
.ripple {
  background-position: center;
  transition: 0.5s;
}
.ripple:hover {
  background: #f1f1f1 radial-gradient(circle, transparent 1%, #00000010 1%)
    center/15000%;
}
.ripple:active {
  background-color: #f1f1f1;
  background-size: 100%;
  transition: 0s;
}
</style>
