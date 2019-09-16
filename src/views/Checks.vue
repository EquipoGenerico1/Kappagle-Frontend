<template>
  <div class="checks">
    <div class="today-check">
      <KCard class="today-card"></KCard>
    </div>
    <div :class="!showMore ? 'show-more-margin' : null" class="show-more">
      <KButton
        v-scroll-to="'#list'"
        class="button"
        value="Show more"
        alt="true"
        @click="showMore = !showMore"
      ></KButton>
    </div>
    <div class="list" id="list" v-if="showMore">
      <KCard v-for="check in moreCheckIns" :key="check" class="mcards"></KCard>
    </div>
    <KButton class="check-button button" value="Check In"></KButton>
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
      showMore: false,
      todayCheckIn: {},
      moreCheckIns: ["1", "2", "3", "4", "5", "6", "7"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.checks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px;
  height: 100%;
}
.mcards {
  height: 120px;
}
.button {
  flex-basis: 100%;
  height: 80px;
}
.check-button {
  position: fixed;
  left: 5px;
  bottom: 5px;
  width: calc(100% - 10px);
}
.list,
.show-more-margin {
  width: 100%;
  margin-bottom: 90px;
}
.show-more {
  height: 80px;
  width: 100%;
}
.today-check {
  width: 100%;
  height: calc(80% - 15px);
}
</style>
