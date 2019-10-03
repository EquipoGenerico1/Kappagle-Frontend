<template>
  <div class="k-hours">
    <div class="h-header">{{day}}/{{month}}/{{year}}</div>
    <div class="h-body">
      <div class="check">
        <div v-if="checkIn">{{parseDate(cIn.hours())}}:{{parseDate(cIn.minutes())}}</div>
        <div v-else>--:--</div>
      </div>
      <div class="check">
        <div v-if="checkOut">{{parseDate(cOut.hours())}}:{{parseDate(cOut.minutes())}}</div>
        <div v-else>--:--</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "KHours",
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
      day: this.parseDate(
        moment
          .unix(this.checkIn ? this.checkIn : moment(Date.now()).unix())
          .toObject().date
      ),
      month: this.parseDate(
        moment
          .unix(this.checkIn ? this.checkIn : moment(Date.now()).unix())
          .toObject().months + 1
      ),
      year: this.parseDate(
        moment
          .unix(this.checkIn ? this.checkIn : moment(Date.now()).unix())
          .toObject().years
      ),
      cIn: moment.unix(this.checkIn),
      cOut: moment.unix(this.checkOut)
    };
  },
  methods: {
    parseDate(number) {
      return number < 10 ? "0" + number : number;
    }
  },
  created() {
    console.log(this.checkIn);
  }
};
</script>

<style scoped>
.k-hours {
  color: white;
  background-color: #2a6cf1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 4px 0px black;
}
.h-header {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}
.h-body {
  font-size: 28px;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
}
.check {
  margin-top: 20%;
  flex-basis: 50%;
  text-align: center;
}
</style>
