<template>
  <div>
    <div>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-input placeholder="Départ" v-model="departure" type="departure"></b-form-input>
        <b-form-input placeholder="Arrivée" v-model="arrival" type="arrival"></b-form-input>

        <b-button type="submit" variant="primary" @click="displayResult()">Rechercher</b-button>
        <b-button type="reset" variant="danger">Renitialiser</b-button>
      </b-form>
    </div>
    <div>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getResult} from "@/api/search";

export default defineComponent({
  name: "FormTrainGreen",
  data() {
    return {
      departure: '',
      arrival: '',
      show: true,
      result: {} as any
    }
  },
  methods: {
    onSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault()
      this.show = false;
    },
    onReset(event: { preventDefault: () => void; }) {
      event.preventDefault()
      // Reset our form values
      this.departure = ''
      this.arrival = ''
    },
    displayResult() {
      console.log(this.departure);
      console.log(this.arrival);
      getResult(this.departure, this.arrival)
          .then((res) => {
        this.result = res.data[0].sections[0];
        console.log(this.result);
      });
    }
  }
});
</script>

<style scoped lang="scss">

</style>