<template>
  <div class="contacts-container container mt-5">
    <h2 class="mb-4">Liste des Contacts</h2>
    <ul class="list-group">
      <li
        v-for="contact in contacts"
        :key="contact.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{{ contact.name }}</span>
        <div class="button-group">
          <button class="btn btn-primary btn-sm me-2" @click="viewDetails(contact)">
            Voir détails
          </button>
          <button class="btn btn-secondary btn-sm me-2" @click="editContact(contact)">
            Modifier
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="removeContact(contact.id)">
            Supprimer
          </button>
        </div>
      </li>
    </ul>

    <!-- Bouton pour ajouter un contact utilisant router-link -->
    <router-link to="/contact/new" class="btn btn-success mt-3">Ajouter un contact</router-link>

    <!-- Modale pour afficher les détails -->
    <div v-if="selectedContact" class="modal">
      <div class="modal-content">
        <span class="close" @click="selectedContact = null">&times;</span>
        <h2>Détails du Contact</h2>
        <p><strong>Nom:</strong> {{ selectedContact.name }}</p>
        <p><strong>Téléphone:</strong> {{ selectedContact.phone }}</p>
        <p><strong>Email:</strong> {{ selectedContact.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useContactStore } from '@/store/contactStore.js';

export default {
  name: 'ContactsList',
  setup() {
    const contactStore = useContactStore();
    const contacts = contactStore.contacts; // Utilisation du store pour obtenir les contacts
    const selectedContact = ref(null);

    const removeContact = (id) => {
      contactStore.removeContact(id);
    };

    const viewDetails = (contact) => {
      selectedContact.value = contact;
    };

    const editContact = (contact) => {
      // Implémentez la logique pour modifier un contact
      alert(`Modifier le contact: ${contact.name}`);
    };

    return { contacts, removeContact, viewDetails, editContact, selectedContact };
  },
};
</script>



<style scoped>
.contacts-container {
  background: #ffffff; /* Assurez-vous que cette couleur correspond à la couleur de fond de la page d'accueil */
  border-radius: 10px;
  padding: 20px;
}

h2 {
  color: #343a40;
}

.list-group-item {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.list-group-item:hover {
  background-color: #e9ecef;
  transform: scale(1.02);
}

.button-group {
  display: flex;
  gap: 10px; /* Espace entre les boutons */
}

.btn-primary {
  background-color: #007bff; /* Couleur de fond pour 'Voir détails' */
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-secondary {
  background-color: #6c757d; /* Couleur de fond pour 'Modifier' */
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #4e555b;
}

.btn-outline-danger {
  border-color: #dc3545;
  color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: #fff;
}

.btn-success {
  background-color: #28a745; /* Couleur de fond pour 'Ajouter' */
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

/* Styles pour la modale */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
