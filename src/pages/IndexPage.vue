<template>
  <q-page>
    <div class="q-pa-md">
      <q-card>
        <q-card-section class="text-h4">
          <CarouselImages></CarouselImages>
          <h2>eFitness: L'idea</h2>
          <q-card-section horizontal>
            <q-img src="/fitness2.jpg" class="q-pr-xl" />
            <q-card-section>
              eFitness è una piattaforma online user-friendly che consente a
              clienti e istruttori di mettersi in contatto per corsi di fitness
              online. L'azienda trae guadagno da abbonamenti di sottoscrizione
              di utenti e di istruttori e fa da garante ad entrambe sui
              pagamenti e sulla certificazione e qualità dei corsi erogati.
              Offre servizi di customer care, rispondendo alle problematiche dei
              clienti, facendogli condividere lezioni, regalando badge fornendo
              recensioni sui corsi e sugli istruttori e promuovvendo la
              piattaforma con coupon, lezioni gratuite, sconti
            </q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="text-h4">
        <q-card-section> </q-card-section>
        <q-card-section>
          <q-btn
            color="primary"
            href="/clienti"
            label="Pagina Clienti"
            class="size-xl"
            padding="lg lg"
          ></q-btn>
          <q-btn
            color="primary"
            href="/istruttori"
            label="Pagina Istruttori"
            class="q-ml-xl"
            padding="lg lg"
          ></q-btn
        ></q-card-section>
      </q-card>

      <q-card class="q-mt-md">
        <q-card-section>
          <h2>eFitness: Il logo</h2>
          <CompanyLogo></CompanyLogo>
        </q-card-section>
        <q-card-section class="text-h4">
          Il logo rappresenta la modernità attraverso un font essenziale,e un
          colore accattivante che riassuma e trasmetta senso estetico e
          salutistico e che richiami in qualche modo l'eleganza e l'alta moda
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CompanyLogo from "src/components/CompanyLogo.vue";
import CarouselImages from "src/components/CarouselImages.vue";
const slide = ref("first");
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
