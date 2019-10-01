<template>
<div class="inputDefault">
  <div class="form_content">
    <label class="label color-gray" :class="{'label_move': inputActive}" :for="name">{{label}}</label>
    <div class="form_input">
      <span class="form_icon color-gray-dark" :class="{'color-gray': !inputActive}">
        <font-awesome-icon icon="user" />
      </span>
      <input
        :id="name"
        class="input color-gray-dark"
        :type="type"
        :name="name"
        @change="$emit('data', data)"
        v-model.trim="data"
        autocomplete="off"
      />
    </div>
  </div>
</div>
</template>

<script>
export default {
 name: "inputDefault",
  props:{
    type: String,
    label: String,
    name: String,
    value: String
  },
  data() {
    return {
      data: this.value,
      inputActive: false
    }
  },
  methods: {
    animationInput() {
      this.data.length == 0 ?
        this.inputActive = false
      :
        this.inputActive = true;
    }
  },
  watch: {
    data(inputData){
      this.data = inputData;
      this.animationInput();
    }
  }
}
</script>

<style scoped>
.inputDefault{
  width: 100%;
}

.form_content {
  width: 100%;
  margin-bottom: 1em;
  position: relative;
}

.form_input {
  width: 100%;
}

.color-gray-dark{
  color: #455A64;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.color-gray{
  color: #A8A8A8;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.label {
  margin-bottom: 0.3rem;
  display: inline-block;
  font-size: 16px;
  transform: translate(32px,36px);
}

.label_move{
  transform: translate(0,0);
}

.input {
  width: 100%;
  padding: .7rem 0;
  padding-left: 32px;
  border:0;
  border-bottom: 1px solid #a8a8a8;
  outline: 0;
  font-size: 18px;
}

.input::placeholder,
.input:-moz-placeholder,
.input:-ms-input-placeholder,
.input::-webkit-input-placeholder {
  color: #a8a8a8;
}

.input:focus {
  border-color: #2154b9;
  transition: 0.2s;
}

.form_icon {
  position: absolute;
  left: 0.2rem;
  bottom: .8rem;
}

</style>