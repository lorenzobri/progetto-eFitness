<template>
  <q-page>
    <q-card class="q-mt-md">
      <q-card-section>
        <h2>La Nostra Storia:</h2>
        <p class="text-h5">
          <q-card-section horizontal>
            Da piccola startup a un punto di riferimento nel mondo del fitness
            online, eFitness ha una storia che riflette la passione per la
            salute e il benessere. Fondata nel 20XX da un team di appassionati
            di fitness e sviluppatori innovativi, l'obiettivo era creare una
            piattaforma che connettesse utenti desiderosi di migliorare la
            propria forma fisica con istruttori qualificati, indipendentemente
            dalla loro posizione geografica.
            <CompanyLogo></CompanyLogo>
          </q-card-section>
        </p>
        <p class="text-h5">
          Nel corso degli anni, eFitness ha cresciuto la sua presenza online,
          attirando istruttori di alto livello e guadagnandosi la fiducia di una
          comunità globale di appassionati di fitness.
        </p>
      </q-card-section>

      <q-card-section>
        <h2>Il Nostro Capitale Umano e il Know-How:</h2>
        <p class="text-h5">
          Il cuore pulsante di eFitness è il suo capitale umano. Il nostro team
          è composto da esperti nel loro campo, unendo competenze uniche per
          creare una piattaforma all'avanguardia. Sviluppatori full-stack con
          esperienza in Vue.js e Node.js guidano lo sviluppo tecnologico, mentre
          designer UI/UX trasformano idee in un'esperienza visiva coinvolgente.
        </p>
        <p class="text-h5">
          Gli istruttori di fitness su eFitness portano con sé anni di
          esperienza e certificazioni riconosciute, garantendo una vasta gamma
          di corsi di alta qualità. Il team di customer care è impegnato nel
          fornire un supporto attento e risolvere le esigenze degli utenti in
          modo tempestivo.
        </p>
        <p class="text-h5">
          Il know-how di eFitness va oltre la tecnologia e l'istruttoria
          fitness. Abbiamo imparato dall'esperienza, ascoltato i feedback degli
          utenti e adattato costantemente la piattaforma per soddisfare le
          crescenti esigenze della nostra comunità.
        </p>
      </q-card-section>
    </q-card>

    <CompanyTree></CompanyTree>
  </q-page>
</template>

<script setup>
import CompanyTree from "src/components/CompanyTree.vue";
import CompanyLogo from "src/components/CompanyLogo.vue";
</script>
