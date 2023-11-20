<template>
  <div class="q-pa-md q-gutter-sm text-h6">
    <q-tree :nodes="organigramma" default-expand-all node-key="label" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const organigramma = ref([
  {
    id: 1,
    label: "CEO",
    children: [
      {
        id: 2,
        label: "Sviluppo",
        children: [
          { id: 4, label: "Sviluppatori Frontend" },
          { id: 5, label: "Sviluppatori Backend" },
        ],
      },
      {
        id: 3,
        label: "Design",
        children: [{ id: 6, label: "Designer UI/UX" }],
      },
      { id: 7, label: "Fitness Management" },
      { id: 8, label: "Customer Care" },
    ],
  },
]);
</script>
