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
        :class="{'color-border-blue' : changeColorAndMoveLabel ,'color-border-red' : stateField}"
        :type="type"
        :name="name"
        @change="$emit('data', data)"
        @blur="handleBlur"
        @click="handleClick"
        v-model.trim="data"
        :autocomplete="complete"
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
    value: String,
    complete: String,
    state: Boolean
  },
  data() {
    return {
      data: this.value,
      changeColorAndMoveLabel: false,
      stateField: this.state,
      animation: false
    }
  },
  methods: {
    handleBlur() {
      if(this.data == null || this.data.length == 0) {
        this.changeColorAndMoveLabel = false;
      }
      this.animation=false;
    },
    handleClick() {
      this.changeColorAndMoveLabel = true;
      this.animation=true;
    },
    animationInput() {
      !this.animation && this.data.length == 0 ?
        this.changeColorAndMoveLabel = false
      :
        this.changeColorAndMoveLabel = true;
    }
  },
  watch: {
    'data'(inputData){
      this.data = inputData;
      this.animationInput();
    },
    'state'() {
      if(this.state==true){
        this.stateField = this.state;
        this.data = '';
        this.$emit('data', this.data)
      }
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
  border-bottom: 2px solid #a8a8a8;
  background-color: transparent;
  outline: 0;
  font-size: 18px;
}

.input:focus {
  border-color: #729DFF;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.input::placeholder,
.input:-moz-placeholder,
.input:-ms-input-placeholder,
.input::-webkit-input-placeholder {
  color: #a8a8a8;
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

.color-border-red {
  border-color: rgb(255, 114, 114);
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}
</style>