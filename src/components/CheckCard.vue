<template>
  <div class="k-card-container">
    <div class="k-card">
      <div class="card-header">
        <div class="date">{{day}}/{{month}}/{{year}}</div>
      </div>
      <div class="card-body">
        <div class="check">
          <p>Entrada</p>
          {{cIn.hours()}}:{{cIn.minutes()}}
        </div>
        <div class="divider">|</div>
        <div class="check">
          <p>Salida</p>
          {{cOut.hours()}}:{{cOut.minutes()}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "KCard",
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
      day: moment.unix(this.checkIn).toObject().date,
      month: moment.unix(this.checkIn).toObject().months + 1,
      year: moment.unix(this.checkIn).toObject().years,
      cIn: moment.unix(this.checkIn),
      cOut: moment.unix(this.checkOut)
    };
  },
  methods: {}
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
}
.card-body {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.check {
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
</style>
