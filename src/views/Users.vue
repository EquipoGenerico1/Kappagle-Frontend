<template>
  <div class="users">
    <div class="check-container">
      <KButton class="button" value="Check In"></KButton>
      <KButton class="button" value="Check Out" alt="true" @click="log"></KButton>
    </div>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";

export default {
  name: "Users",
  components: {
    KButton
  },
  data() {
    return {
      text: null
    };
  },
  methods: {
    log: function() {
      console.log("hihihi");
    }
  }
};
</script>

<style scoped>
.check-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 15vh;
  padding: 5px;
}
.button {
  flex-basis: 100%;
  height: 45%;
}
</style>
