<template>
  <div class="snackBar">
    <div class="snackBar_card shadow" >
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
    message: String
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
  width: 400px;
  padding: 1rem 2rem;
  margin: auto;
  border-radius: 4px;
  background-color: #444444;
}

.snackBar_body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.836);
  font-size: 18px;
}

.d-none {
  display: none;
}

.d-block {
  display: block;
}

</style>