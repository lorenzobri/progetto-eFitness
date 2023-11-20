<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="accent"
      label="Inizia la Tua Avventura"
      size="xl"
      @click="fullHeight = true"
    />
    <CompanyLogoSmall></CompanyLogoSmall>

    <q-dialog v-model="fullHeight" full-height>
      <q-card class="column full-height q-pa-xl" style="width: 400px">
        <RegisterForm></RegisterForm>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="X" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  setup() {
    return {
      small: ref(false),
      medium: ref(false),
      fullWidth: ref(false),
      fullHeight: ref(false),
    };
  },
  components: { RegisterForm },
};
</script>
