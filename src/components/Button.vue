<template>
  <div class="k-button">
    <button
      class="btn"
      :class="alt == 'true' ? 'alt' : null"
      @click="emitClick"
    >{{value.toUpperCase()}}</button>
  </div>
</template>

    <script>
export default {
  name: "KButton",
  props: {
    value: {
      type: String
    },
    alt: {
      type: String,
      default: "false"
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

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #3996ce;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  transition: 200ms;
  color: white;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
}
button:active {
  transform: scale(1.025);
}
.btn {
  font-weight: 700;
}
.alt {
  background-color: #eb8334;
  border: 0;
}
</style>
