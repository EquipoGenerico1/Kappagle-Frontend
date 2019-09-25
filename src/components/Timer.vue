<template>
  <div class="k-timer" v-if="checkIn">
    <div id="time">{{parseDate(cIn.hours())}}:{{parseDate(cIn.minutes())}}</div>
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
      day: this.parseDate(moment.unix(this.checkIn).toObject().date),
      month: this.parseDate(moment.unix(this.checkIn).toObject().months + 1),
      year: this.parseDate(moment.unix(this.checkIn).toObject().years),
      cIn: moment.unix(this.checkIn),
      cOut: moment.unix(this.checkOut)
    };
  },
  methods: {
    parseDate(number) {
      return number < 10 ? "0" + number : number;
    }
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
