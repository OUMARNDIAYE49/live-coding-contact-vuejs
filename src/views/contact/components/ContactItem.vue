<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ contact.name }}</h5>
      <p class="card-text">{{ contact.phone }}</p>
      <div class="d-flex justify-content-end">
        <router-link :to="`/contact/${contact.id}`" class="btn btn-info mr-2">Détails</router-link>
        <router-link :to="`/contact/edit/${contact.id}`" class="btn btn-outline-secondary mr-2">Modifier</router-link>
        <button @click="deleteContact" class="btn btn-danger">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  emits: ['deleteContact'],
  setup(props, { emit }) {
    const deleteContact = () => {
      emit('deleteContact', props.contact.id);
    };

    return { deleteContact };
  },
};
</script>


<style scoped>
.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
}

.contact-info p {
  margin: 0.2rem 0;
  color: #555;
}

.contact-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-btn,
.details-btn {
  color: #007bff;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #f0f8ff;
  transition: background-color 0.3s ease;
}

.edit-btn:hover,
.details-btn:hover {
  background-color: #e7f1ff;
}

.delete-btn {
  padding: 0.5rem;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #ff1a1a;
}
</style>
