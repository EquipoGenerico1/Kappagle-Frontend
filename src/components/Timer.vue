<template>
  <div class="k-timer">
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
      }, 10000);
    }
  },
  watch: {
    now: function(val) {
      if (this.checkIn) {
        const duration = moment.duration(
          moment(val).diff(moment.unix(this.checkIn))
        );
        var time = moment(duration)._i._data;
        var hours = this.parseDate(time.hours);
        var minutes = this.parseDate(time.minutes);
        this.elapsed = `${hours}:${minutes}`;
      }
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
