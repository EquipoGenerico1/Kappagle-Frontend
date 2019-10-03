<template>
  <div class="landing">
    <KHours
      v-if="todayCheckIn != null"
      :checkIn="todayCheckIn ? todayCheckIn.checkIn : null"
      :checkOut="todayCheckIn ? todayCheckIn.checkOut : null"
      id="top"
    ></KHours>
    <KTimer
      v-if="todayCheckIn != null"
      :checkIn="todayCheckIn ? todayCheckIn.checkIn : null"
      id="timer"
    ></KTimer>
    <div id="bottom">
      <KCheckButton
        :value="todayCheckIn != 1 ? 'Salida' : 'Entrada'"
        @click="todayCheckIn != 1 ?  checkOut() : checkIn()"
      ></KCheckButton>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import KHours from "../components/Hours";
import KTimer from "../components/Timer";
import KCheckButton from "../components/CheckButton";
import axios from "../helpers/axios";

export default {
  name: "home",
  components: {
    KHours,
    KTimer,
    KCheckButton
  },
  data() {
    return {
      now: moment(Date.now()).unix(),
      todayCheckIn: null,
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
          console.log(res);
          this.todayCheckIn = res.data;
          console.log(this.todayCheckIn);
        })
        .catch(err => {
          this.todayCheckIn = 1;
        });
    },
    checkLocation() {
      if (navigator.geolocation) {
        console.log("geolocation supported");
        navigator.geolocation.getCurrentPosition(position => {
          var ll = [position.coords.latitude, position.coords.longitude];
          var v1 = [28.136693, -15.436721];
          var v2 = [28.134933, -15.429157];
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
            console.log(res.data);
            this.todayCheckIn = res.data;
          })
          .catch(err => {});
      } else {
        console.log("user cant check in this location");
      }
    },
    async checkOut() {
      await this.checkLocation();
      console.log(this.canCheck);
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
