<template>
  <div class="k-check-button">
    <button @click="emitClick" id="btn" class="ripple">{{value}}</button>
  </div>
</template>

<script>
export default {
  name: "KCheckButton",
  props: {
    value: {
      type: String,
      default: "Enter"
    }
  },
  methods: {
    emitClick: function() {
      this.$emit("click");
    }
  }
};
</script>
<style scoped>
.k-check-button {
  height: 100%;
  width: 100%;
}
#btn {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #2a6cf1;
  background-color: #f1f1f1;
  font-size: 56px;
  outline: none;
  box-shadow: 0px 1px 5px -3px black;
}
</style>
