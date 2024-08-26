<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ contact.name }}</h5>
        <p class="card-text">Téléphone : {{ contact.phone }}</p>
        <p class="card-text">Email : {{ contact.email }}</p>
        <router-link to="/contact" class="btn btn-primary">Retour à la liste</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useContactStore } from '@/store/contactStore.js';

export default {
  setup() {
    const route = useRoute();
    const contactStore = useContactStore();
    const contact = ref(contactStore.getContactById(route.params.id));

    return { contact };
  },
};
</script>
