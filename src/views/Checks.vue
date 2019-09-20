<template>
  <div class="checks">
    <div class="today-check">
      <KCard class="today-card"></KCard>
    </div>
    <div :class="!showMore ? 'show-more-margin' : 'not-show-more-margin'" class="show-more">
      <KButton
        v-scroll-to="'#list'"
        class="show-more-button"
        :value="showMore? 'Show less' : 'Show more'"
        alt="true"
        @click="showMore = !showMore"
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
    <KButton class="check-button button" value="Check In"></KButton>
  </div>
</template>

<script>
// @ is an alias to /src
import KButton from "../components/Button";
import KCard from "../components/CheckCard";
import axios from "../helpers/axios";

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
      moreCheckIns: []
    };
  },
  methods: {
    getChecks() {
      axios
        .checks()
        .then(res => {
          this.moreCheckIns = res.data;
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  },
  created: function() {
    this.getChecks();
  }
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
  margin-top: 5px;
  width: 100%;
  margin-bottom: 90px;
}
.not-show-more-margin {
  margin-top: 10px;
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
