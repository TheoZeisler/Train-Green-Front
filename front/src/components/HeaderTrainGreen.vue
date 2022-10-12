<template>
  <div class="header">
    <div class="header-logo">
      <img src="../../public/img/logo.png" alt="Logo Train Green"/>
    </div>
    <div class="header-title">
      <span>Train Green</span>
    </div>
  </div>
  <div class="header-menu">
    <ul class="header-menu-items">
      <li v-for="item in menuItems" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderTrainGreen",
  data: () => ({
    menuItems: ['Voyager', 'Mes billets', 'Mon profil']
  }),
});
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  box-shadow: 1px 0px 10px grey;
  z-index: 999;
  align-items: center;
  justify-content: center;
  align-content: center;

  &-logo {
    img {
      height: 60px;
    }
  }

  &-title {
  }

  &-menu {
    &-items {
      display: flex;
      list-style-type: none;
      justify-content: center;

      li {
        padding: 10px;
      }
    }
  }
}
</style>