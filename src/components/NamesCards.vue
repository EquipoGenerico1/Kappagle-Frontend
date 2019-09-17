<template>
    <div id="NCard-container">
        <div id="name">
            {{name}}
        </div>
    </div>
</template>

<script>
export default {
  name: "NCard",
  props: {
    name: {
      type: String,
      default: "Pacoooooo"
    }
    },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

#NCard-container{
background-color: white;
padding: 15px 15px;
border-radius: 5px;
-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
margin-bottom: 6px;
}
#name{
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
}
</style>



