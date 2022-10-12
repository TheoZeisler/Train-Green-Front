<template>
  <div>
    <form-train-green/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormTrainGreen from "@/components/FormTrainGreen.vue";

export default defineComponent({
  name: "SearchJourney",
  components: {FormTrainGreen},
});
</script>

<style scoped lang="scss">

</style>