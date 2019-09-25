<template>
  <div class="landing">
    <KHours v-if="now" :checkIn="now" id="top"></KHours>
    <KTimer id="timer" :checkIn="now"></KTimer>
    <div id="bottom">
      <KCheckButton value="Entrada"></KCheckButton>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import KHours from "../components/Hours";
import KTimer from "../components/Timer";
import KCheckButton from "../components/CheckButton";

export default {
  name: "home",
  components: {
    KHours,
    KTimer,
    KCheckButton
  },
  data() {
    return {
      now: moment().unix()
    };
  }
};
</script>

<style scoped>
.landing {
  background-color: #fcfcfc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#top {
  height: 50%;
}
#bottom {
  margin-top: -95px;
  height: 50%;
  padding: 5px;
  flex-basis: 100%;
}
#timer {
  z-index: 100000;
  margin-top: -95px;
  width: 190px;
  height: 190px;
}
</style>
