<template>
  <div class="log-card">
    <div class="card">
      <div class="card-header">
        <div class="date">{{day}}/{{month}}/{{year}}</div>
        <div class="timer-container">
          <div class="timer">{{elapsed}} horas</div>
        </div>
      </div>
      <div class="card-subheader">
        <div class="in">Entrada</div>
        <div class="header-divider"></div>
        <div class="out">Salida</div>
      </div>
      <div class="card-body">
        <div class="checkin">{{parseDate(cIn.hours())}}:{{parseDate(cIn.minutes())}}</div>
        <div class="body-divider"></div>
        <div class="checkout">{{parseDate(cOut.hours())}}:{{parseDate(cOut.minutes())}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "LogCard",
  props: {
    checkIn: {
      type: Number,
      default: new Date()
    },
    checkOut: {
      type: Number,
      default: new Date()
    }
  },
  data() {
    return {
      day: this.parseDate(moment.unix(this.checkIn).toObject().date),
      month: this.parseDate(moment.unix(this.checkIn).toObject().months + 1),
      year: this.parseDate(moment.unix(this.checkIn).toObject().years),
      cIn: moment.unix(this.checkIn),
      cOut: moment.unix(this.checkOut),
      elapsed: this.getElapsed()
    };
  },
  methods: {
    parseDate(number) {
      return number < 10 ? "0" + number : number;
    },
    getElapsed() {
      const duration = moment.duration(
        moment.unix(this.checkOut).diff(moment.unix(this.checkIn))
      );
      var time = moment(duration)._i._data;
      var hours = time.hours;
      var minutes = this.parseDate(time.minutes);
      return `${hours}:${minutes}`;
    }
  }
};
</script>

<style scoped>
.log-card {
  padding: 8px;
  padding-bottom: 0px;
}

.log-card:last-child {
  padding-bottom: 8px;
}
.card {
  height: 150px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px -3px black;
}
.card-header {
  display: flex;
  justify-content: space-between;
  height: 35px;
  background-color: #2a6cf1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card-subheader {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-weight: 500;
  background-color: #245ccc;
  height: 35px;
}
.card-body {
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: rgb(90, 90, 90);
  font-size: 20px;
}
.date {
  padding: 5px;
  color: white;
  font-size: 20px;
  font-weight: 600;
}
.timer-container {
  padding: 5px;
}
.timer {
  padding: 5px;
  color: #2a6cf1;
  background-color: white;
  border-radius: 15px;
  font-size: 12px;
}
.body-divider {
  background-color: rgba(128, 128, 128, 0.5);
  width: 1px;
  height: 40px;
}
.header-divider {
  width: 1px;
  height: 25px;
}
</style>
