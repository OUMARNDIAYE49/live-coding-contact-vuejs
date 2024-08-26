import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ContactList from '../views/contact/ContactList.vue';
import ContactAdd from '../views/contact/contactAdd.vue';
import ContactEdit from '../views/contact/ContactEdit.vue';
import ContactShow from '../views/contact/ContactShow.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'ContactList', component: ContactList },
  { path: '/contact/new', name: 'ContactAdd', component: ContactAdd },
  { path: '/contact/edit/:id', name: 'ContactEdit', component: ContactEdit },
  { path: '/contact/:id', name: 'ContactShow', component: ContactShow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
