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
    <div class="result">
      <ul>
        <li v-for="index in sections.steps" v-bind:key="index">
          ⏳{{ index.departure_date_time}} {{ index.from }} ➡️ {{ index.departure_date_time}} {{ index.to }} ⌛️ {{ this.changeType(index.type) }} ⏱️ {{ index.duration }} mins 💨 {{ index.co2_emissions }}gCO2e
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getResult} from "../api/search";

export default defineComponent({
  name: "FormTrainGreen",
  data() {
    return {
      departure: '20 rue Gombert',
      arrival: '10 rue du Pavé bleu',
      show: true,
      sections : {
        all: {} as any,
        from: '',
        steps_from: [] as any,
        steps_to: [] as any,
        to: '',
        steps: [] as { from: string, to: string, type: string, arrival_date_time: string, departure_date_time: string, duration: string, co2_emissions: string} [],
      },
      array: [] as any
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
      getResult(this.departure, this.arrival)
          .then((res: any) => {
        this.sections.all = res.data[0].sections;
        for (let i=0; i < this.sections.all.length; i++){
          this.array.push(this.sections.all[i]);
          this.sections.steps = this.array.map((res: any) => {
            var steps_obj = {from: '', to: '', type: '', arrival_date_time: '', departure_date_time: '', duration: '', co2_emissions: ''};
            steps_obj.from = res.from?.name;
            steps_obj.to = res.to?.name;
            steps_obj.type = res.type;
            steps_obj.arrival_date_time = res.arrival_date_time;
            steps_obj.departure_date_time = res.departure_date_time;
            steps_obj.duration = ((res.duration)/60).toFixed(2);
            steps_obj.co2_emissions = res.co2_emission?.value;
            return steps_obj
          });
        }
        console.log(this.sections.steps);
      });
    },
    changeType(type:string) {
      if (type === 'street_network') return 'À pied';
      if (type === 'public_transport') return 'En transport public';
      if (type === 'waiting') return 'Attente';
      if (type === 'transfer') return 'Transfert';
    }
  }
});
</script>

<style scoped lang="scss">
.result {
  width: 129%
}
</style>