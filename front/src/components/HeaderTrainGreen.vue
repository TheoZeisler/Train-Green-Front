<template>
  <div class="header">
    <div class="header-logo">
      <img src="../../public/img/logo.png" alt="Logo Train Green"/>
    </div>
    <div class="header-title">
      <span>Train Green</span>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderTrainGreen"
});
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;

  &-logo {
    img {
      height: 60px;
    }
  }

  &-title {
    padding: 20px;
  }
}
</style>