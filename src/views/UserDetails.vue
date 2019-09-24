<template>
  <div id="container-master">
    {{name}}
    <br />
    {{hours}}
  </div>
</template>

<script>
import axios from "../helpers/axios";

export default {
  name: "UserDetails",
  components: {},
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      hours: 0
    };
  },
  created: function() {
    let id = this.$route.params.id;
    axios.getHoursFromUser(id).then(res => {
      console.log(res);
    });
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
  background-color: #1e344b;
  margin-bottom: 44px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
#seach-button {
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;
  color: #1e344b;
  background-color: #1e344b;
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
  color: white;
  padding: 1px 10px;
  font-size: 18px;
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