<template>
  <div class="dropdown">
    <div
      class="menu__item menu__item--dropdown"
      v-on:click="toggle('ranking')"
      v-bind:class="{'open' : dropDowns.ranking.open}"
    >
      <a class="menu__link menu__link--toggle" href="#">
        <span>{{item.name}}</span>
        <font-awesome-icon class="menu__icon" icon="angle-down" />
      </a>

      <ul class="dropdown-menu">
        <li v-for="item in items" class="dropdown-menu__item">
          <button class="dropdown-menu__link" href="#" @click="select(item)">{{item.name}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    items: {
      default: []
    },
    selected: {
      default: ""
    }
  },
  data() {
    return {
      dropDowns: {
        ranking: { open: false }
      },
      item: this.selected
    };
  },
  methods: {
    toggle: function(dropdownName) {
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
    },
    close: function() {
      for (var dd in this.dropDowns) {
        this.dropDowns[dd].open = false;
      }
    },
    select(item) {
      this.item = item;
      this.$emit("click", item);
    }
  },
  ready: function() {
    var self = this;
    window.addEventListener(
      "click",
      function(e) {
        if (!e.target.parentNode.classList.contains("menu__link--toggle")) {
          self.close();
        }
      },
      false
    );
  }
};
</script>

<style scoped>
button {
  border: 0px;
  width: 100%;
  text-align: left;
}
ul {
  list-style: none;
}

.menu {
  display: flex;
}
.menu .__item {
  position: relative;
  padding-right: 3rem;
}

.open .dropdown-menu {
  display: block;
}

.dropdown-menu {
  position: absolute;
  min-width: 130px;
  display: none;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.dropdown-menu__item:first-child .dropdown-menu__link {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dropdown-menu__item:last-child .dropdown-menu__link {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.dropdown-menu__link {
  display: block;

  padding: 10px;
  color: gray;
  background-color: #fafafa;
}
.dropdown-menu__link:hover {
  color: gray;
  background-color: #ccc;
}

.menu__icon {
  margin-left: 10px;
}
</style>
