<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          size="3em"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <a href="/"> <CompanyLogoSmall></CompanyLogoSmall></a>
        <q-toolbar-title>
          eFitness: Il tuo percorso verso il benessere, un passo alla volta
        </q-toolbar-title>

        <div>5AIT - Cossali</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-info">
      <q-list class="q-pt-xl">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-h6"
        />
      </q-list>
      <CompanyLogoSmall class="q-ml-xl q-mt-lg"></CompanyLogoSmall>
    </q-drawer>

    <q-page-container class="q-pt-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import CompanyLogoSmall from "src/components/CompanyLogoSmall.vue";

const linksList = [
  {
    title: "Home",
    caption: "L'idea",
    icon: "home",
    link: "/",
  },
  {
    title: "Mission AZiendale",
    caption: "Cosa ci spinge a intraprendere il progetto",
    icon: "psychology_alt",
    link: "/mission",
  },
  {
    title: "Obiettivi",
    caption: "Fasi del progetto",
    icon: "ads_click",
    link: "/obiettivi",
  },
  {
    title: "Mezzi",
    caption: "Come pensiamo di farlo",
    icon: "keyboard",
    link: "/mezzi",
  },
  {
    title: "Chi siamo",
    caption: "Analisi del mercato",
    icon: "apartment",
    link: "/storia",
  },
  {
    title: "Studio Fattibilità",
    caption: "Storia e organigramma",
    icon: "query_stats",
    link: "/studio-fattibilita",
  },
  {
    title: "Product Placement",
    caption: "Obiettivi commerciali e di communicazione",
    icon: "phone_iphone",
    link: "/placement",
  },
  {
    title: "Gestione Spese",
    caption: "Funding e Business Plan",
    icon: "payments",
    link: "/spese",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    CompanyLogoSmall,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
