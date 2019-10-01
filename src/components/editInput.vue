<template>
<div class="editInput border_bottom">
  <div class="form_content">
    <label class="label color-gray" :class="{'label_move': inputActive}" :for="name">{{label}}</label>
    <div class="form_input">
      <div class="form_icon_input">
        <font-awesome-icon @click="disabled = !disabled" icon="pen" size="lg" :class="{'hidde': changeData}" />
        <font-awesome-icon @click="updateUsername()" icon="save" size="lg" :class="{'hidde': !changeData}" />
      </div>
      <span class="form_icon color-gray-dark" :class="{'color-gray': !inputActive}">
        <font-awesome-icon icon="user" />
      </span>
      <input
        :disabled="disabled"
        :id="name"
        class="input color-gray-dark"
        type="text"
        :name="name"
        @keyup.enter="$emit('data', data)"
        v-model.trim="data"
        autocomplete="off"
      />
    </div>
  </div>
</div>
</template>

<script>
export default {
 name: "editInput",
  props:{
    label: String,
    name: String,
    value: String
  },
  data() {
    return {
      currentData: this.value,
      data: this.value,
      inputActive: false,
      disabled: true,
      changeData: false
    }
  },
  methods: {
    animationInput() {
      this.data.length == 0 ?
        this.inputActive = false
      :
        this.inputActive = true;
    },
    changeIcons(){
      this.data == this.currentData ?
        this.changeData = false
      :
        this.changeData = true;
    },updateUsername(){
      
    }
  },
  watch: {
    data(inputData){
      this.data = inputData;
      this.changeIcons();
      this.animationInput();
    }
  },
  created(){
    this.animationInput();
  }
}
</script>

<style scoped>
.editInput{
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
  width: 85%;
  padding: .7rem 0;
  padding-left: 32px;
  border-radius: 4px;
  border:0;
  outline: 0;
  font-size: 18px;
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

.form_icon_input{
  position: absolute;
  right: .5rem;
  bottom: 2rem;
  color: #729DFF;
}

.border_bottom{
  border-bottom: 1px solid rgb(112, 112, 112, 0.40);
}

</style>