<template>
  <q-carousel
    v-if="banners.length"
    arrows
    infinite
    control
    autoplay
    :interval="3000"
  >
    <q-carousel-slide v-for="banner in banners" :key="banner.id">
      <img :src="banner.image" :alt="banner.alt" class="q-img" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

const banners = ref([
  {
    id: 1,
    image: "https://picsum.photos/800/300",
    alt: "Descrizione banner 1",
  },
  {
    id: 2,
    image: "https://picsum.photos/800/300",
    alt: "Descrizione banner 2",
  },
  // Aggiungi altri banner secondo le tue esigenze
]);
</script>

<style scoped>
/* Aggiungi stili CSS se necessario */
</style>
