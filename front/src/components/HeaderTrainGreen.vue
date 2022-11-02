<template>
  <b-row class="header">
    <b-row class="header-title">
      <img class="header-title-logo" src="../../public/img/logo.png" alt="Logo Train Green"/>
      <span class="header-title-label">Train Green</span>
    </b-row>
    <b-row>
      <b-button-group class="header-menu-items">
        <b-button variant="success" v-for="item in menuItems" v-bind:key="item">{{ item }}</b-button>
      </b-button-group>
    </b-row>
  </b-row>
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
  top: 0;
  border: 0px solid;
  box-shadow: 1px 0px 10px grey;
  padding: 5px;

  &-title {
    display: flow-root;
    margin-bottom: 1rem;

    &-logo {
      width: 100px;
    }

    &-label {
      font-size: 30px;
    }
  }

  &-menu {
    &-items {
      width: 50%;
      margin: auto;
    }
  }
}
</style>