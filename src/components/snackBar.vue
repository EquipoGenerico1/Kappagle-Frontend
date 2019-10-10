<template>
  <div class="snackBar">
    <div class="snackBar_card shadow" :class="[color, {'animate-fade' : fade}]" >
      <div class="snackBar_body">
        <p>{{message}}</p>
        <font-awesome-icon icon="times" @click="animate()"/>
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
  data() {
    return {
      fade: false
    }
  },
  methods: {
    animate(){
      this.fade=true;
      setTimeout(() => {
        this.$emit('click')
      }, this.second || 500);
    }
  },
  created() {
    setTimeout(() => {
      this.animate();
    }, this.second || 4000);
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

.dark {
  background-color: #444444;
}

.danger {
  background-color: #e45757;
}

.animate-fade {
  opacity: 0;
  transition: .5s;
}

</style>