<template>
  <div>
    <form-train-green/>
  </div>
  <div>
    <display-result-train-green/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormTrainGreen from "@/components/FormTrainGreen.vue";
import DisplayResultTrainGreen from "@/components/DisplayResultTrainGreen.vue";

export default defineComponent({
  name: "SearchJourney",
  components: {DisplayResultTrainGreen, FormTrainGreen},
});
</script>

<style scoped lang="scss">

</style>