<template>
  <div class="snackBar">
    <div class="snackBar_card">
      <div class="snackBar_body">
        <p>{{message}}</p>
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
  bottom: 6.5rem;
  left: 0;
  right: 0;
}

.snackBar_card {
  width: fit-content;
  padding: 2rem;
  margin: auto;
  border-radius: 4px;
  background-color: #df4747;
}

.snackBar_body {
  display: flex;
  color: #fff;
}

</style>