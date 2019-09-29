<template>
  <div class="user-header">
    <div class="user-image"></div>
    <div class="name">José Pérez Tejera</div>
    <div class="email">jose@gmail.com</div>
    <div class="selector"></div>
  </div>
</template>

<script>
export default {
  name: "UserHeader",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.user-header {
  color: white;
  background-color: #2a6cf1;
  width: 100%;
  height: 100%;
  box-shadow: 0px -1px 5px 1px black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.user-image {
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.name {
  flex-basis: 100%;
  text-align: center;
}
.email {
  flex-basis: 100%;
  text-align: center;
}
</style>
