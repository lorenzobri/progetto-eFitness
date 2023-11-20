<template>
  <q-page>
    <q-container>
      <h2>Diventa un Istruttore su eFitness</h2>

      <q-img src="/fitness3.jpg" />
      <q-card class="q-mt-md">
        <q-card-section>
          <h2>Cosa Ti Offriamo:</h2>
          <ul class="text-h5">
            <li>
              <strong>Piattaforma All'Avanguardia:</strong> Utilizza strumenti
              avanzati per offrire esperienze di allenamento coinvolgenti.
            </li>
            <li>
              <strong>Ampia Visibilità:</strong> Collegati con una vasta
              audience di appassionati di fitness pronti a impegnarsi nei tuoi
              corsi.
            </li>
            <li>
              <strong>Flessibilità:</strong> Imposta i tuoi orari e gestisci le
              tue lezioni in base alla tua agenda.
            </li>
          </ul>
        </q-card-section>

        <q-card-section>
          <h2>Come Funziona:</h2>
          <ol class="text-h5">
            <li>
              <strong>Registrazione Semplice:</strong> Compila il tuo profilo e
              diventa parte della nostra community istruttori.
            </li>
            <li>
              <strong>Carica i Tuoi Corsi:</strong> Condividi il tuo know-how,
              carica i tuoi corsi e raggiungi un pubblico globale.
            </li>
            <li>
              <strong>Guida e Cresci:</strong> Interagisci con gli utenti,
              rispondi ai commenti e fai crescere la tua community.
            </li>
          </ol>
        </q-card-section>

        <q-card-section>
          <h2>Perché Scegliere eFitness:</h2>
          <ul class="text-h5">
            <li>
              <strong>Ampia Visibilità:</strong> Connettiti con una vasta
              community di persone appassionate di fitness.
            </li>
            <li>
              <strong>Community Coinvolgente:</strong> Collabora con istruttori
              e membri per una crescita reciproca.
            </li>
          </ul>
        </q-card-section>
      </q-card>

      <q-btn
        color="accent"
        label="Inizia la Tua Avventura"
        to="/registrazione-cliente"
        size="xl"
      />
      <CompanyLogoSmall></CompanyLogoSmall>
    </q-container>
  </q-page>
</template>

<script>
import CompanyLogoSmall from "src/components/CompanyLogoSmall.vue";

export default {
  name: "PaginaIstruttori",
  components: { CompanyLogoSmall },
};
</script>
