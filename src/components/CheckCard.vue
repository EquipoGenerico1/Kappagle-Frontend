<template>
  <div class="k-card-container">
    <div class="k-card">
      <div class="card-header">
        <div class="date">{{date}}</div>
      </div>
      <div class="card-body">
        <div class="check">
          <p>Entrada</p>
          {{checkIn}}
        </div>
        <div class="divider">|</div>
        <div class="check">
          <p>Salida</p>
          {{checkOut}}
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "KCard",
  props: {
    date: {
      type: String
    },
    checkIn: {
      type: String,
      default: "--:--"
    },
    checkOut: {
      type: String,
      default: "--:--"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.k-card-container {
  height: 15vh;
  padding: 5px;
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
  height: 30%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #14283d;
  color: white;
}
.card-body {
  height: 70%;
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
