<template>
  <div class="fab">
    <button class="fab-btn ripple">
      <font-awesome-icon id="icon" :icon="faIcon" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Fab",
  props: {
    faIcon: {
      type: String,
      default: "plus"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.fab {
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0px 3px 10px -5px black;
}
.fab-btn {
  background-color: white;
  border: none;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  outline: none;
}
#icon {
  color: red;
  width: 20px;
  height: 20px;
}
</style>
