<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      height="500px"
    >
      <q-carousel-slide :name="1" img-src="/fitness1.jpg" />
      <q-carousel-slide :name="2" img-src="/fitness4.jpg" />
      <q-carousel-slide :name="3" img-src="/fitness3.jpg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
