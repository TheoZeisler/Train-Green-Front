<template>
  <header-train-green/>
  <div class="search">
    <search-journey/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HeaderTrainGreen from "@/components/HeaderTrainGreen.vue";
import SearchJourney from "@/views/SearchJourney.vue";

export default defineComponent({
  components: {
    SearchJourney,
    HeaderTrainGreen,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.search {
  margin: 2rem auto;
  width: 40%;
}
</style>
