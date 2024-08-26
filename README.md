# Carnet de Contacts

## Description

Cette application web permet de gérer un carnet de contacts où les utilisateurs peuvent ajouter, modifier, supprimer, et consulter des contacts. L'application utilise Vue.js pour la création de l'interface utilisateur, Vue Router pour la navigation, Pinia pour la gestion d'état global, et Bootstrap pour le style. La communication entre composants se fait via `emit`, `props`, et `watch`.

## Fonctionnalités

### 1. Page d'accueil (Home)
- **URL** : `/`
- Affiche un message de bienvenue.
- Permet de naviguer vers la page de gestion des contacts.

### 2. Liste des contacts (ContactList)
- **URL** : `/contact`
- Affiche une liste des contacts.
- Utilise le composant `ContactItem` pour afficher chaque contact.
- Le composant `ContactItem` reçoit une `prop` représentant le contact à afficher.
- Les actions pour modifier et afficher les détails du contact sont gérées via la navigation avec Vue Router.
- La suppression d'un contact est gérée par un événement `emit` envoyé au composant parent `ContactList`, qui se charge de la suppression via Pinia.

### 3. Ajout et modification de contact
- **Ajout de contact** : `ContactAdd.vue`
- **Modification de contact** : `ContactEdit.vue`
- Ces pages utilisent le composant `ContactForm`.
- `ContactForm` reçoit deux `props` :
  - `contact` : un objet représentant le contact en cours d'ajout ou de modification.
  - `edit` : un booléen indiquant si le formulaire est en mode édition ou ajout.
- Lors de la soumission du formulaire, un événement `emit` est déclenché, permettant au composant parent de gérer l'ajout ou la modification du contact via Pinia.

### 4. Suppression d'un contact
- Un bouton de suppression est ajouté dans le composant `ContactItem`.
- Lorsqu'un contact est supprimé, un événement `emit` est envoyé à `ContactList`, qui se charge de la suppression en mettant à jour l'état global dans Pinia.

### 5. Détails d'un contact (ContactShow)
- **URL** : `/contact/:id`
- Affiche les détails complets d'un contact (nom, numéro de téléphone, adresse email).
- Utilise Vue Router pour naviguer vers cette page depuis `ContactItem`.

## Routes

- `/` : Affiche la page d'accueil avec un message de bienvenue.
- `/contact` : Affiche la liste des contacts.
- `/contact/:id` : Affiche les détails d'un contact.
- `/contact/new` : Page pour ajouter un nouveau contact en utilisant `ContactAdd`.
- `/contact/edit/:id` : Page pour éditer un contact existant en utilisant `ContactEdit`.

## Outils Utilisés

- **Vue.js 3** : Framework JavaScript pour construire l'interface utilisateur.
- **Pinia** : Gestionnaire d'état pour Vue.js.
- **Vue Router** : Gestionnaire de routage pour Vue.js, permettant la navigation entre les différentes sections de l'application.
- **Bootstrap 5** : Framework CSS pour le stylage de l'interface utilisateur.

## Prérequis

- **Node.js** (version 14 ou plus)
- **npm** (version 6 ou plus)
- **Vue** (optionnel, pour créer et gérer le projet Vue.js)


## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**
   `git clone https://github.com/OUMARNDIAYE49/live-coding-contact-vuejs.git`

2. **Accédez au dossier du projet :**
   `cd live-coding-contact-vuejs`

3. **Installez les dépendances :**
   `npm install`


## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

`npm run dev.`


## Authors
 

[Oumar Djiby Ndiaye ](https://github.com/OUMARNDIAYE49/ABC_Corporation_Survey.git)