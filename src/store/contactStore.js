// // src/store/contactStore.js
// import { defineStore } from 'pinia';

// export const useContactStore = defineStore('contactStore', {
//   state: () => ({
//     contacts: [
//       { id: 1, name: 'Alpha Sow', phone: '49520352', email: 'A@example.com' },
//       { id: 2, name: 'Marieme Tall', phone: '42510352', email: 'M@example.com' },
//       // Ajoutez d'autres contacts ici
//     ],
//   }),
//   actions: {
//     addContact(newContact) {
//       // Ajout d'un nouveau contact avec un ID unique
//       const newId = this.contacts.length ? Math.max(this.contacts.map(c => c.id)) + 1 : 1;
//       this.contacts.push({ ...newContact, id: newId });
//     },
//     removeContact(id) {
//       // Suppression d'un contact par ID
//       this.contacts = this.contacts.filter(contact => contact.id !== id);
//     },
//     updateContact(updatedContact) {
//       // Mise à jour d'un contact existant
//       const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
//       if (index !== -1) {
//         this.contacts[index] = updatedContact;
//       }
//     },
//   },
// });

// import { defineStore } from 'pinia';

// export const useContactStore = defineStore('contactStore', {
//   state: () => ({
//     contacts: [
//       { id: 1, name: 'Alpha Sow', phone: '49520352', email: 'A@example.com' },
//       { id: 2, name: 'Marieme Tall', phone: '42510352', email: 'M@example.com' },
//       // Ajoutez d'autres contacts ici
//     ],
//   }),
//   actions: {
//     addContact(newContact) {
//       const newId = this.contacts.length ? Math.max(this.contacts.map(c => c.id)) + 1 : 1;
//       this.contacts.push({ ...newContact, id: newId });
//     },
//     removeContact(id) {
//       const index = this.contacts.findIndex(contact => contact.id === id);
//       if (index !== -1) {
//         this.contacts.splice(index, 1); // Utilisation de splice pour supprimer l'élément
//       }
//     },
//     updateContact(updatedContact) {
//       const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
//       if (index !== -1) {
//         this.contacts[index] = updatedContact;
//       }
//     },
//   },
// });

import { defineStore } from 'pinia';

export const useContactStore = defineStore('contactStore', {
  state: () => ({
    contacts: [
      { id: 1, name: 'Alpha Sow', phone: '49520352', email: 'A@example.com' },
      { id: 2, name: 'Marieme Tall', phone: '42510352', email: 'M@example.com' },
      // Ajoutez d'autres contacts ici
    ],
  }),
  actions: {
    addContact(newContact) {
      const newId = this.contacts.length ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
      this.contacts.push({ ...newContact, id: newId });
    },
    removeContact(id) {
      const index = this.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    },
    updateContact(updatedContact) {
      const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      }
    },
    getContactById(id) {
      return this.contacts.find(contact => contact.id === parseInt(id));
    },
  },
});


