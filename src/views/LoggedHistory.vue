<template>
  <div class="self-history">
    <div class="header">
      <Header
        :name="user ? user.name : ''"
        :email="user ? user.email : ''"
        @monthSelected="changeMonth"
        @yearSelected="changeYear"
      ></Header>
    </div>
    <div class="body">
      <LogCard
        v-for="card in checkList"
        :checkIn="card.checkIn"
        :checkOut="card.checkOut"
        :key="card._id"
      ></LogCard>
    </div>
    <Fab faIcon="file-pdf" :alt="true" @click="downloadPdf(month, year)" />
  </div>
</template>

<script>
import Header from "../components/UserHeader";
import Fab from "../components/Fab";
import LogCard from "../components/LogCard";
import moment from "moment";
import axios from "../helpers/axios";

export default {
  name: "self-history",
  components: {
    Header,
    Fab,
    LogCard
  },
  data() {
    return {
      checkList: [],
      user: null,
      month: 1,
      year: 2019
    };
  },
  methods: {
    getChecks() {
      if (this.$route.params.id) {
        axios
          .checksFromId(this.$route.params.id)
          .then(res => {
            this.checkList = res.data;
          })
          .catch(err => {});
      } else {
        axios
          .checks()
          .then(res => {
            this.checkList = res.data;
          })
          .catch(err => {});
      }
    },
    getUser(id) {
      axios
        .getUser(id)
        .then(res => {
          this.user = res.data;
        })
        .catch(err => {});
    },
    changeMonth(item) {
      console.log("history", item);
      this.month = item.index;
    },
    changeYear(item) {
      console.log("history", item);
      this.year = item.index;
    },
    downloadPdf(month, year) {
      console.log(month, year);
      var date = `1-${month}-${year}`;
      var userData = {
        name: this.user.name,
        _id: this.$route.params.id
      };
      var finalDate;
      if (month == 12) {
        finalDate = `1-1-${year + 1}`;
      } else {
        finalDate = `1-${month + 1}-${year}`;
      }
      axios.getPdfAdmin(date, finalDate, userData);
    }
  },
  created() {
    this.getChecks();
    if (this.$route.params.id) {
      this.getUser(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.self-history {
}
.header {
  height: 25%;
}
.body {
  height: 75%;
}
</style>
