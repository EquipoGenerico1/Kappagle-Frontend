<template>
  <div class="checks">
    <div class="today-check">
      <KShowCaseCard
        v-if="todayCheckIn"
        class="today-card"
        id="today-card"
        :checkIn="todayCheckIn"
        :key="todayCheckIn"
      ></KShowCaseCard>
    </div>
    <KButton
      class="check-button button"
      :value="todayCheckIn != 1 ? 'CHECK OUT' : 'CHECK IN'"
      @click="todayCheckIn != 1 ?  checkOut() : checkIn()"
    ></KButton>
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
      todayCheckIn: null,
      moreCheckIns: [],
      lat: null,
      lon: null,
      canCheck: false
    };
  },
  methods: {
    getCurrentCheck() {
      axios
        .currentCheck()
        .then(res => {
          this.todayCheckIn = res.data.checkIn;
        })
        .catch(err => {
          this.todayCheckIn = 1;
        });
    },
    getChecks() {
      if (this.showMore) {
        axios
          .checks()
          .then(res => {
            this.moreCheckIns = res.data;
            this.showMore = true;
          })
          .catch(err => {});
      }
    },
    checkLocation() {
      if (navigator.geolocation) {
        console.log("geolocation supported");
        navigator.geolocation.getCurrentPosition(position => {
          var ll = [position.coords.latitude, position.coords.longitude];
          var v1 = [28.107019, -15.446851];
          var v2 = [28.105732, -15.445268];
          if (
            ll[0] < v1[0] &&
            ll[1] > v1[1] &&
            ll[0] > v2[0] &&
            ll[1] < v2[1]
          ) {
            this.canCheck = true;
          } else {
            this.canCheck = false;
          }
        });
      } else {
      }
    },
    async checkIn() {
      await this.checkLocation();
      if (this.canCheck) {
        axios
          .checkIn()
          .then(res => {
            this.todayCheckIn = res.data.checkIn;
          })
          .catch(err => {});
      } else {
        console.log("user cant check in this location");
      }
    },
    async checkOut() {
      await this.checkLocation();
      if (this.canCheck) {
        axios
          .checkOut()
          .then(res => {
            this.todayCheckIn = 1;
          })
          .catch(err => {});
      }
    }
  },
  watch: {},
  created: function() {
    this.getCurrentCheck();
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
