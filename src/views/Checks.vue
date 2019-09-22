<template>
  <div class="checks">
    <div class="today-check">
      <KShowCaseCard class="today-card" id="today-card"></KShowCaseCard>
    </div>
    <KButton class="check-button button" value="Check In"></KButton>
    <div :class="showMore ? 'show-more-margin' : null" class="show-more">
      <KButton
        v-scroll-to="showMore ? '#list' : '#today-card'"
        class="show-more-button"
        :value="showMore ? 'Ocultar Historial' : 'Mostrar Historial'"
        alt="true"
        @click="showMore = !showMore; getChecks()"
      ></KButton>
    </div>
    <div class="list" id="list" v-if="showMore">
      <KCard
        v-for="check in moreCheckIns"
        :key="check._id"
        :checkIn="check.checkIn"
        :checkOut="check.checkOut"
        class="mcards"
      ></KCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";
import KCard from "../components/CheckCard";
import KShowCaseCard from "../components/ShowCaseCard";
import axios from "../helpers/axios";

export default {
  name: "Checks",
  components: {
    KButton,
    KCard,
    KShowCaseCard
  },
  data() {
    return {
      showMore: false,
      todayCheckIn: {},
      moreCheckIns: []
    };
  },
  methods: {
    getChecks() {
      if (this.showMore) {
        axios
          .checks()
          .then(res => {
            this.moreCheckIns = res.data;
            this.showMore = true;
          })
          .catch(err => console.log(err));
      }
    }
  },
  created: function() {}
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
  height: 110px;
}
.show-more-button {
  max-height: 100%;
  height: inherit;
}
.button {
  margin-top: 5px;
  flex-basis: calc(100% - 10px);
  height: 80px;
}
.check-button {
  width: calc(100% - 10px);
}
.list {
  margin-top: 5px;
  width: 100%;
}
.show-more-margin {
  margin-top: 10px;
  width: 100%;
}
.show-more {
  height: 50px;
  width: calc(100% - 10px);
}
.today-check {
  width: 100%;
  min-height: calc(80% - 15px);
}
</style>
