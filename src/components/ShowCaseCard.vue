<template>
  <div class="k-card-container">
    <div class="k-card">
      <div class="card-header">
        <div class="date">{{day}}/{{month}}/{{year}}</div>
      </div>
      <div class="card-body">
        <div class="check">
          <p>Entrada</p>
          <div v-if="checkIn">{{parseDate(cIn.hours())}}:{{parseDate(cIn.minutes())}}</div>
          <div v-else>--:--</div>
        </div>
        <div class="divider"></div>
        <div class="check">
          <p>Salida</p>
          <div v-if="checkOut">{{parseDate(cOut.hours())}}:{{parseDate(cOut.minutes())}}</div>
          <div v-else>--:--</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "KShowcaseCard",
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
.k-card-container {
  height: 100%;
  padding: 5px;
  flex-basis: 100%;
}
.k-card {
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
.card-header {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #14283d;
  color: white;
  -webkit-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px -1.9px rgba(0, 0, 0, 0.75);
}
.card-body {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
}
.check {
  flex-basis: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
p {
  min-width: 80px;
  text-align: center;
  margin: 0;
  flex-basis: 100%;
}
.date {
  margin-left: 5px;
}
.divider {
  background-color: rgba(128, 128, 128, 0.5);
  width: 90%;
  height: 1px;
}
</style>
