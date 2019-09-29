<template>
  <div class="self-history">
    <div class="header">
      <Header></Header>
    </div>
    <div class="body">
      <LogCard v-for="card in 20" :checkIn="now" :checkOut="now"></LogCard>
    </div>
    <Fab faIcon="file-pdf" />
  </div>
</template>

<script>
import Header from "../components/UserHeader";
import Fab from "../components/Fab";
import LogCard from "../components/LogCard";
import moment from "moment";

export default {
  name: "self-history",
  components: {
    Header,
    Fab,
    LogCard
  },
  data() {
    return {
      now: moment().unix()
    };
  }
};
</script>

<style scoped>
.self-history {
}
.header {
  height: 30%;
}
.body {
  height: 70%;
}
</style>
