<template>
  <div id="app">
    <div class="navbar" :class="!showNav ? 'shadow' : null" v-if="page">
      <div class="nav-title">{{page}}</div>
      <div class="nav-icon" @click="showNav = !showNav" v-if="role == 'ROLE_ADMIN'">
        <font-awesome-icon icon="bars" class="menu-icon" />
      </div>
      <div class="nav-icon" v-else>
        <font-awesome-icon icon="user" class="menu-icon" />
      </div>
    </div>
    <div
      class="navbar-menu"
      v-if="showNav && role == 'ROLE_ADMIN'"
      :class="showNav ? 'shadow' : null"
    >
      <div class="menu-item" @click="showNav = false">
        <router-link to="/landing">Fichar</router-link>
      </div>
      <div class="divider"></div>
      <div class="menu-item" @click="showNav = false">
        <router-link to="/users">Empleados</router-link>
      </div>
      <div class="divider"></div>
      <!-- <div class="menu-item">Mi Perfil</div>
      <div class="divider"></div>-->
      <div class="menu-item" @click="logOut()">Cerrar Sesión</div>
    </div>
    <router-view :id="page ? 'view': 'login'"></router-view>
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
      role: this.getRole()
    };
  },
  methods: {
    setViewName(name) {
      switch (name) {
        case "checks":
          this.page = "Fichar";
          break;

        case "users":
          this.page = "Empleados";
          break;
      }
    },
    getRole() {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token.role) {
        return token.role;
      } else {
        return null;
      }
    },
    logOut() {
      localStorage.removeItem("token");
      this.page = null;
      this.showNav = false;
      this.$router.push("/login");
    }
  },
  created: function() {
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
  background-color: #f2f2f2;
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
  height: 70px;
  background-color: #14283d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-icon {
  flex-basis: 10%;
  text-align: center;
}
.nav-title {
  flex-basis: 90%;
  color: white;
  font-size: 24px;
  padding-left: 10px;
}
.menu-icon {
  color: white;
  font-size: 24px;
  margin-right: 10px;
}
.navbar-menu {
  text-align: center;
  color: white;
  background-color: #19314b;
}
.menu-item {
  padding: 5px;
  height: 40px;
  font-size: 20px;
}
.menu-item:active {
  transition: ease-in 150ms;
}
.divider {
  background-color: rgba(128, 128, 128, 0.5);
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 1px;
}
.shadow {
  -webkit-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
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
