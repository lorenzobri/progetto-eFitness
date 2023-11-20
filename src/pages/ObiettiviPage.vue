<template>
  <q-page>
    <div class="q-pa-md">
      <h1>eMission: Obiettivi temporali</h1>
      <q-timeline class="q-mt-md">
        <q-timeline-entry
          v-for="(goal, index) in goals"
          :key="index"
          :icon="goal.icon"
          class="text-h6 q-ml-xl"
          size="3em"
          color="positive"
        >
          <q-timeline-label class="text-h5" :side="goal.side">
            {{ goal.date }} -
          </q-timeline-label>

          <q-timeline-title class="text-h5">
            {{ goal.title }}
          </q-timeline-title>

          <q-timeline-body>
            <p>{{ goal.description }}</p>
          </q-timeline-body>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PaginaObiettivi",
  data() {
    return {
      goals: [
        {
          date: "Q1 2023",
          title: "Analisi di Mercato",
          description:
            "Identificare la domanda di corsi di fitness online e analizzare la concorrenza.",
          side: "right",
          icon: "storefront",
        },
        {
          date: "Q2 2023",
          title: "Sviluppo della Piattaforma",
          description:
            "Progettare un'interfaccia utente intuitiva e user-friendly.",
          side: "left",
          icon: "handshake",
        },
        {
          date: "Q3 2023",
          title: "Infrastruttura e Sicurezza",
          description:
            "Creare un sistema robusto per gestire abbonamenti, transazioni e pagamenti.",
          side: "right",
          icon: "hub",
        },
        {
          date: "Q4 2023",
          title: "Connessione tra Clienti e Istruttori",
          description:
            "Sviluppare un sistema di matching per collegare clienti con istruttori e implementare un sistema di messaggistica.",
          side: "left",
          icon: "diversity_1",
        },
        {
          date: "Q1 2024",
          title: "Promozione e Marketing",
          description:
            "Creare strategie di marketing per attirare clienti e istruttori sulla piattaforma.",
          side: "right",
          icon: "campaign",
        },
        {
          date: "Q2 2024",
          title: "Servizi Aggiuntivi",
          description:
            "Implementare il sistema di badge e riconoscimenti speciali per incentivare la partecipazione e creare una sezione di recensioni.",
          side: "right",
          icon: "reviews",
        },
        {
          date: "Q3 2024",
          title: "Customer Care",
          description:
            "Stabilire un servizio di assistenza dedicato per rispondere alle domande e alle richieste degli utenti.",
          side: "right",
          icon: "support_agent",
        },
        {
          date: "Q4 2024",
          title: "Partnership e Certificazioni",
          description:
            "Collaborare con istruttori qualificati, ottenere certificazioni e esplorare partnership con aziende correlate.",
          side: "left",
          icon: "approval",
        },
        {
          date: "Q1 2025",
          title: "Testing e Ottimizzazione",
          description:
            "Condurre test approfonditi della piattaforma prima del lancio e raccogliere feedback dagli utenti.",
          side: "right",
          icon: "bug_report",
        },
        {
          date: "Q2 2025",
          title: "Lancio e Monitoraggio",
          description:
            "Lanciare ufficialmente la piattaforma e monitorare le metriche chiave per valutare il successo.",
          side: "left",
          icon: "rocket",
        },
      ],
    };
  },
};
</script>
