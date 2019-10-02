<template>
  <div id="container-master">
    <div id="search-bar">
      <button id="seach-button">
        <font-awesome-icon icon="search" />
      </button>
      <input type="search" id="mySearch" placeholder="Buscar empleado..." />
    </div>
    <div id="employers-cards">
      <NCard
        class="users"
        v-for="user in users"
        :name="user.name"
        :key="user._id"
        @click="goToDetails(user._id)"
      ></NCard>
    </div>
    <Fab faIcon="user-plus" />
  </div>
</template>

<script>
import NCard from "../components/NamesCards";
import Fab from "../components/Fab";
import axios from "../helpers/axios";

export default {
  name: "EmployersList",
  components: {
    NCard,
    Fab
  },
  data() {
    return {
      users: []
    };
  },
  created: function() {
    axios
      .getUsers()
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {});
  },
  methods: {
    goToDetails(id) {
      console.log(id);
      this.$router
        .push({ path: `user/${id}/history`, query: {} })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
#container-master {
  font-size: 24px;
}
#search-bar {
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #2156b8;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
#seach-button {
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;
  background-color: #2156b8;
  color: white;
  padding: 2px 20px;
  font-size: 24px;
}
#mySearch {
  background-color: transparent;
  width: 70%;
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;
  outline: none;
  color: white;
  padding: 1px 10px;
  font-size: 18px;
}
#mySearch::placeholder {
  color: white;
}
#space-for-add-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
#add-button {
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;
  color: #1e344b;
  background-color: white;
  color: #14283d;
  padding: 20px 20px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  margin-top: 80px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin-right: 50%;
}
#employers-cards {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>