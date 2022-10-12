<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input placeholder="Départ" v-model="departure" type="departure"></b-form-input>
      <b-form-input placeholder="Arrivée" v-model="arrival" type="arrival"></b-form-input>

      <b-button type="submit" variant="primary">Rechercher</b-button>
      <b-button type="reset" variant="danger">Renitialiser</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "FormTrainGreen",
  data() {
    return {
      departure: '',
      arrival: '',
      show: true
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
    }
  }
});
</script>

<style scoped lang="scss">

</style>