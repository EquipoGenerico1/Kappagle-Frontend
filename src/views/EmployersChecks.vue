<template>
  <div>
    <div class="list" id="list">
      <KCard
        v-for="check in moreCheckIns"
        :key="check._id"
        :checkIn="check.checkIn"
        :checkOut="check.checkOut"
        class="mcards"
      ></KCard>
    </div>
  </div>
</template>

<script>
import KCard from "../components/CheckCard";
import axios from "../helpers/axios";

export default {
  name: "EmployersChecks",
  components: {
    KCard
  },
  data() {
    return {
      moreCheckIns: []
    };
  },
  methods: {
    getChecks() {
      axios
        .checks()
        .then(res => {
          this.moreCheckIns = res.data;
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.mcards {
  height: 110px;
}
</style>