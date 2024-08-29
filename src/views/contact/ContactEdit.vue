<!-- <template>
  <div class="container mt-5">
    <h2 class="mb-4">Modifier le Contact</h2>
    <ContactForm :contact="contact" :edit="true" @submitForm="editContact" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ContactForm from './components/ContactForm.vue';
import { useContactStore } from '@/store/contactStore.js';

export default {
  components: { ContactForm },
  setup() {
    const route = useRoute();
    const contactStore = useContactStore();
    const contact = ref(contactStore.getContactById(route.params.id));

    const editContact = (updatedContact) => {
      contactStore.updateContact(updatedContact);
    };

    return { contact, editContact };
  },
};
</script> -->

<template>
  <div class="container mt-5">
    <h2 class="mb-4">Modifier le Contact</h2>
    <ContactForm :contact="contact" :edit="true" @submitForm="editContact" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ContactForm from './components/ContactForm.vue';
import { useContactStore } from '@/store/contactStore.js';

export default {
  components: { ContactForm },
  setup() {
    const route = useRoute();
    const contactStore = useContactStore();

    // Utilisation de computed pour que les changements soient réactifs
    const contact = computed(() => contactStore.getContactById(route.params.id));

    const editContact = (updatedContact) => {
      contactStore.updateContact(updatedContact);
    };

    return { contact, editContact };
  },
};
</script>
