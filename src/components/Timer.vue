<template>
  <div class="k-timer">
    <div id="time" v-if="elapsed || checkOut">{{checkOut ? finished : elapsed}}</div>
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
    },
    checkOut: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      elapsed: "00:00",
      finished: null,
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
    },
    duration(num) {
      if (this.checkIn) {
        const duration = moment.duration(
          moment(num).diff(moment.unix(this.checkIn))
        );
        return moment(duration)._i._data;
      }
    },
    checkOutDuration() {
      if (this.checkOut) {
        console.log(this.checkOut);

        var finishedAt = moment.unix(this.checkOut);
        console.log(finishedAt);
        var time = this.duration(finishedAt);
        console.log(time);
        var hours = this.parseDate(time.hours);
        var minutes = this.parseDate(time.minutes);
        this.finished = `${hours}:${minutes}`;
      }
    }
  },
  watch: {
    now: function(val) {
      var time = this.duration(val);
      var hours = this.parseDate(time.hours);
      var minutes = this.parseDate(time.minutes);
      this.elapsed = `${hours}:${minutes}`;
    }
  },
  created() {
    this.setNow();
    this.checkOutDuration();
  },
  updated() {
    this.checkOutDuration();
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
