<template>
  <div class="k-timer" v-if="checkIn">
    <div id="time" v-if="elapsed">{{elapsed}}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "KTimer",
  props: {
    checkIn: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      elapsed: "00:00",
      now: null
    };
  },
  methods: {
    parseDate(number) {
      number = number.toFixed(0);
      return number < 10 ? "0" + number : number;
    },
    setNow() {
      setInterval(() => {
        this.now = moment(Date.now());
      }, 1000 * 60);
    }
  },
  watch: {
    now: function(val) {
      var duration = moment.duration(
        moment(val).diff(moment.unix(this.checkIn))
      );
      var hours = this.parseDate(duration.asHours());
      var minutes = this.parseDate(duration.asMinutes());
      this.elapsed = `${hours}:${minutes}`;
      console.log(this.elapsed);
    }
  },
  created() {
    this.setNow();
  }
};
</script>

<style scoped>
.k-timer {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 2px 10px -5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#time {
  color: #6a6a6a;
  font-size: 48px;
}
</style>
