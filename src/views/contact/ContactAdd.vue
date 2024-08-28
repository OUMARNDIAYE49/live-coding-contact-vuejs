<template>
  <div class="container mt-5">
    <h2 class="mb-4">Ajouter un Nouveau Contact</h2>
    <ContactForm @submitForm="addContact" />
  </div>
</template>+

<script>
import ContactForm from './components/ContactForm.vue';
import { useContactStore } from '@/store/contactStore.js';
import { useRouter } from 'vue-router';

export default {
  components: { ContactForm },
  setup() {
    const contactStore = useContactStore();
    const router = useRouter();

    const addContact = (contact) => {
      contactStore.addContact(contact);
      router.push('/contacts'); // Rediriger vers la liste des contacts après l'ajout
    };

    return { addContact };
  },
};
</script>



<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
