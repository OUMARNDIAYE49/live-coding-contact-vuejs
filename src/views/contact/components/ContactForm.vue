<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" id="name" v-model="formContact.name" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="phone">Téléphone</label>
      <input type="tel" id="phone" v-model="formContact.phone" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="formContact.email" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-success mt-3">
      {{ edit ? 'Modifier' : 'Ajouter' }} Contact
    </button>
  </form>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    contact: Object,
    edit: Boolean,
  },
  emits: ['submitForm'],
  setup(props, { emit }) {
    const formContact = ref({ name: '', phone: '', email: '' });

    watch(
      () => props.contact,
      (newContact) => {
        if (newContact) {
          formContact.value = { ...newContact };
        }
      },
      { immediate: true }
    );

    const submitForm = () => {
      emit('submitForm', { ...formContact.value });
    };

    return { formContact, submitForm };
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
