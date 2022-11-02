import api from "@/utils/api";

export const getResult = (street1: string, street2: string) =>
    api.get(`https://train-green-back.herokuapp.com/app?de=${street1}&a=${street2}`)
        .then((response) => response);

export default {getResult};