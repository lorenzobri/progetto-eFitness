<template>
  <q-page>
    <div class="q-pa-md">
      <h2>Benvenuto in un Mondo di Benessere</h2>
      <q-img src="/fitness1.jpg" />

      <q-card>
        <q-card-section class="text-h4">
          <h2>eFitness: L'idea</h2>
          <q-card-section horizontal>
            Immergiti in una varietà di corsi, dall'energia del workout ad alta
            intensità alla tranquillità dello yoga. Su eFitness, il tuo
            benessere è la nostra priorità.
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-md">
        <q-card-section>
          <h2>Cosa Ti Offriamo:</h2>
          <ul class="text-h4">
            <li>
              <strong>Scelta Illimitata:</strong> Dai un'occhiata alla nostra
              vasta gamma di corsi e trova l'allenamento perfetto per te.
            </li>
            <li>
              <strong>Esperienza Personalizzata:</strong> Crea il tuo profilo e
              lascia che eFitness ti guidi attraverso un percorso di fitness su
              misura.
            </li>
            <li>
              <strong>Comunità Attiva:</strong> Condividi, partecipa alle sfide
              e cresci insieme alla nostra comunità appassionata.
            </li>
          </ul>
        </q-card-section>

        <q-card-section>
          <h2>Come Funziona:</h2>
          <ol class="text-h4">
            <li>
              <strong>Registrazione Rapida:</strong> Iscriviti in pochi clic e
              preparati a iniziare il tuo viaggio verso il benessere.
            </li>
            <li>
              <strong>Esplora e Scopri:</strong> Trova corsi che ami, prova
              qualcosa di nuovo e divertiti mentre ti alleni.
            </li>
            <li>
              <strong>Connettiti:</strong> Interagisci con istruttori e membri
              attraverso chat, commenti e partecipa a una community vivace.
            </li>
          </ol>
        </q-card-section>

        <q-card-section>
          <h2>Perché Scegliere eFitness:</h2>
          <ul class="text-h4">
            <li>
              <strong>Esperienza Personalizzata:</strong> Adattiamo il fitness
              al tuo stile di vita.
            </li>
            <li>
              <strong>Community Coinvolgente:</strong> Fai parte di una comunità
              motivante.
            </li>
            <li>
              <strong>Accessibile Ovunque:</strong> Allenati quando vuoi, dove
              vuoi.
            </li>
          </ul>
        </q-card-section>
      </q-card>

      <RegisterComponent></RegisterComponent>
    </div>
  </q-page>
</template>

<script>
import CompanyLogoSmall from "src/components/CompanyLogoSmall.vue";
import RegisterComponent from "src/components/RegisterComponent.vue";

export default {
  name: "PaginaClienti",
  components: { RegisterComponent },
};
</script>
