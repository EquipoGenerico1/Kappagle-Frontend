<template>
  <div class="ButtonRoundedLarge">
    <button
      class="btn"
      :class="alt == 'true' ? 'alt' : null"
      @click="emitClick"
    >{{value.toUpperCase()}}</button>
  </div>
</template>

    <script>
export default {
  name: "ButtonRoundedLarge",
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
    emitClick() {
      this.$emit("click");
    }
  }
};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  width: 100%;
  padding: 1.3rem;
  outline: 0;
  border: 0;
  border-radius: 50px;
  background-color: #729DFF;
  font-size: 20px;
  color: rgb(241, 241, 241, .79);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.32);
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.btn:active {
  transform: scale(1.025);
}

.alt {
  background-color: #eb8334;
}
</style>
