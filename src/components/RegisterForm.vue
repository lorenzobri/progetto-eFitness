<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-input v-model="firstName" label="Nome" />
      <q-input v-model="lastName" label="Cognome" />
      <q-input v-model="username" label="Username" />
      <q-input v-model="email" label="Email" type="email" />
      <q-input v-model="password" label="Password" type="password" />

      <q-select v-model="userType" :options="userTypeOptions" label="Ruolo" />

      <q-btn
        type="submit"
        label="Registrati"
        color="primary"
        class="q-mt-xl"
        @click="okEvent"
      />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { Notify } from "quasar";

const firstName = ref("");
const lastName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const userType = ref(""); // Aggiunto campo per il tipo di utente

const userTypeOptions = ["Cliente", "Istruttore"]; // Opzioni per il combobox

const submitForm = () => {
  // Puoi gestire l'invio del modulo qui
  console.log("Dati utente:", {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    email: email.value,
    password: password.value,
    userType: userType.value,
  });
};

function okEvent() {
  Notify.create({
    type: "positive",
    message: "Ti sei registrato con successo a eFitness! Sali a bordo!",
  });
}
</script>
