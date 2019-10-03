<template>
  <div class="user-header">
    <div class="user-image"></div>
    <div class="name">{{name}}</div>
    <div class="email">{{email}}</div>
    <div class="selector">
      <Dropdown :selected="months[0]" :items="months" @click="monthSelected"></Dropdown>
      <Dropdown :selected="years[0]" :items="years" @click="yearSelected"></Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown";
export default {
  name: "UserHeader",
  components: {
    Dropdown
  },
  props: {
    name: {
      type: String,
      default: "José Pérez Tejera"
    },
    email: {
      type: String,
      default: "test@gmail.com"
    }
  },
  data() {
    return {
      months: [
        {
          name: "Enero",
          index: 1
        },
        {
          name: "Febrero",
          index: 2
        },
        {
          name: "Marzo",
          index: 3
        },
        {
          name: "Abril",
          index: 4
        },
        {
          name: "Mayo",
          index: 5
        },
        {
          name: "Junio",
          index: 6
        },
        {
          name: "Julio",
          index: 7
        },
        {
          name: "Agosto",
          index: 8
        },
        {
          name: "Septiembre",
          index: 9
        },
        {
          name: "Octubre",
          index: 10
        },
        {
          name: "Noviembre",
          index: 11
        },
        {
          name: "Diciembre",
          index: 12
        }
      ],
      years: [
        {
          name: "2019",
          index: 2019
        },
        { name: "2020", index: 2020 }
      ],
      selected: "Febrero"
    };
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.selected = payload;
    },
    monthSelected(item) {
      console.log(item);
      this.$emit("monthSelected", item);
    },
    yearSelected(item) {
      console.log(item);
      this.$emit("yearSelected", item);
    }
  }
};
</script>

<style scoped>
.user-header {
  color: white;
  background-color: #2a6cf1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 5px 0px black;
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
.dropdown {
  padding-right: 5px;
  padding-left: 5px;
  color: white;
  margin: 0px;
}
.selector {
  /* border-radius: 5px; */
  /* background-color: white; */
  padding-left: 8px;
  flex-basis: 100%;
  display: flex;
  justify-content: start;
}
</style>
