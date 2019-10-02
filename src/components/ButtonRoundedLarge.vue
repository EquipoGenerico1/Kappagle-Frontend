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
  background-color: #729DFF;
  border: 0;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  transition: 200ms;
  color: rgb(241, 241, 241, .79);
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
