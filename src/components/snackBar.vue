<template>
  <div class="snackBar">
    <div class="snackBar_card shadow" :class="color" >
      <div class="snackBar_body">
        <p>{{message}}</p>
        <font-awesome-icon icon="times" @click="$emit('click')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'snackBar',
  props:{
    message: String,
    color: String,
    second: Number
  },
  created() {
    setTimeout(() => {
      this.$emit('click')
    }, this.second || 2000);
  }
}
</script>

<style scoped>
.snackBar {
  position: absolute;
  bottom: 9.5rem;
  left: 0;
  right: 0;
  transition: ease-in-out 200ms;
}

.snackBar_card {
  width: fit-content;
  padding: 1rem 2rem;
  margin: auto;
  border-radius: 4px;
}

.dark {
  background-color: #444444;
}

.danger {
  background-color: #e45757;
}

.snackBar_body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.836);
  font-size: 18px;
}

.snackBar_body p {
  padding-right: 2rem;
}

.d-none {
  display: none;
}

.d-block {
  display: block;
}

</style>