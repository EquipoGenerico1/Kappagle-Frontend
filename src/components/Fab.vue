<template>
  <div class="fab">
    <button class="fab-btn ripple" @click="emitClick">
      <font-awesome-icon :class="alt ? 'icon-red' : 'icon-gray'" :icon="faIcon" />
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
    },
    alt: {
      type: Boolean,
      default: null
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
.icon-red {
  color: red;
  width: 20px;
  height: 20px;
}
.icon-gray {
  color: gray;
  width: 20px;
  height: 20px;
}
</style>
