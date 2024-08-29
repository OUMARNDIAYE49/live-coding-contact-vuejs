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

    <router-link to="/contact/new" class="btn btn-success mt-3">Ajouter un contact</router-link>

    <!-- Modal pour afficher les détails du contact -->
    <div v-if="selectedContact" class="modal">
      <div class="modal-content">
        <span class="close" @click="selectedContact = null">&times;</span>
        <h2>Détails du Contact</h2>
        <p><strong>Nom:</strong> {{ selectedContact.name }}</p>
        <p><strong>Téléphone:</strong> {{ selectedContact.phone }}</p>
        <p><strong>Email:</strong> {{ selectedContact.email }}</p>
      </div>
    </div>

    <!-- Modal pour modifier le contact -->
    <div v-if="isEditing" class="modal">
      <div class="modal-content">
        <span class="close" @click="cancelEdit">&times;</span>
        <h2>Modifier le Contact</h2>
        <form @submit.prevent="updateContact">
          <div class="form-group mb-3">
            <label for="name">Nom :</label>
            <input
              type="text"
              id="name"
              v-model="editableContact.name"
              class="form-control"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="phone">Téléphone :</label>
            <input
              type="text"
              id="phone"
              v-model="editableContact.phone"
              class="form-control"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">Email :</label>
            <input
              type="email"
              id="email"
              v-model="editableContact.email"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Enregistrer</button>
          <button type="button" class="btn btn-secondary" @click="cancelEdit">
            Annuler
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useContactStore } from '@/store/contactStore.js';

export default {
  name: 'ContactsList',
  setup() {
    const contactStore = useContactStore();
    const contacts = contactStore.contacts;
    const selectedContact = ref(null);
    const isEditing = ref(false);
    const editableContact = reactive({
      id: null,
      name: '',
      phone: '',
      email: '',
    });

    const removeContact = (id) => {
      contactStore.removeContact(id);
    };

    const viewDetails = (contact) => {
      selectedContact.value = contact;
    };

    const editContact = (contact) => {
      // Pré-remplir le formulaire avec les informations du contact
      editableContact.id = contact.id;
      editableContact.name = contact.name;
      editableContact.phone = contact.phone;
      editableContact.email = contact.email;
      isEditing.value = true;
    };

    const updateContact = () => {
      // Vérifie si la méthode updateContact existe dans le store
      if (contactStore.updateContact) {
        contactStore.updateContact({ ...editableContact });
        isEditing.value = false;
        alert('Contact mis à jour avec succès');
      } else {
        console.error('La méthode updateContact n\'est pas définie dans le store');
      }
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    return {
      contacts,
      removeContact,
      viewDetails,
      editContact,
      updateContact,
      cancelEdit,
      selectedContact,
      isEditing,
      editableContact,
    };
  },
};
</script>

<style scoped>
.contacts-container {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

h2 {
  color: #343a40;
}

/* Autres styles sont inchangés */

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
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
