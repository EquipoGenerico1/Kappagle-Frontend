<template>
<div class="inputDefault">
  <div class="form_content">
    <label class="label color-gray" :class="{'label_move': changeColorAndMoveLabel}" :for="name">{{label}}</label>
    <div class="form_input">
      <span class="form_icon color-gray-dark" :class="{'color-gray': !changeColorAndMoveLabel}">
        <font-awesome-icon :icon="icon" />
      </span>
      <input
        :id="name"
        class="input color-gray-dark" 
        :class="{'color-border-blue': changeColorAndMoveLabel}"
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
    icon: String,
    type: String,
    label: String,
    name: String,
    value: String
  },
  data() {
    return {
      data: this.value,
      changeColorAndMoveLabel: false
    }
  },
  methods: {
    animationInput() {
      this.data.length == 0 ?
        this.changeColorAndMoveLabel = false
      :
        this.changeColorAndMoveLabel = true;
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

.label {
  margin-bottom: 0.3rem;
  display: inline-block;
  font-size: 18px;
  transform: translate(31px,39px);
}

.label_move{
  transform: translate(0,0);
}

.input {
  width: 100%;
  padding: .8rem .5rem;
  padding-left: 32px;
  border:0;
  border-bottom: 1px solid #a8a8a8;
  background-color: transparent;
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
  border-color: #729DFF;
  transition: 0.2s;
}

.form_icon {
  position: absolute;
  left: 0.2rem;
  bottom: .8rem;
}

.color-gray-dark {
  color: #455A64;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.color-gray {
  color: #A8A8A8;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.color-border-blue {
  border-color: #729DFF;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

</style>