<template>
  <div class="NCard-container ripple" @click="emitClick">
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "NCard",
  props: {
    name: {
      type: String,
      default: "Paco López García"
    },
    hours: {
      type: String,
      default: "None"
    }
  },
  data() {
    return {};
  },
  methods: {
    emitClick: function() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.NCard-container {
  height: 100%;
  background-color: white;
  padding: 20px 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin: 8px;
  margin-bottom: 0px;
}
.NCard-container:last-child {
  margin-bottom: 8px;
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>



