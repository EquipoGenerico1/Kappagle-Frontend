<template>
  <div class="checks">
    <div class="check-container">
      <KButton class="button" value="Check In"></KButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";
import KCard from "../components/CheckCard";

export default {
  name: "Checks",
  components: {
    KButton,
    KCard
  },
  data() {
    return {
      text: null
    };
  },
  methods: {}
};
</script>

<style scoped>
.check-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px;
}
.button {
  flex-basis: 100%;
  height: 10vh;
}
</style>
