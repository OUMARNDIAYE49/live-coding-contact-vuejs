<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <a class="navbar-brand" href="#">Carnet de Contacts</a>
          <router-link to="/" class="nav-link" active-class="active">Accueil</router-link>
            <router-link to="/contact" class="nav-link" active-class="active">Contacts</router-link>
            <router-link to="/contact/new" class="nav-link" active-class="active">Ajouter</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
}

.navbar-brand {
  font-weight: bold;
  color: #007bff;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;
}

.navbar-brand:hover {
  color: #0056b3;
}

.navbar-nav .nav-item {
  margin-left: 20px;
}

.nav-link {
  color: #343a40;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease-in-out;
  padding: 10px 15px;
}

.nav-link:hover {
  color: #007bff;
}

.nav-link.active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

.navbar-toggler {
  border-color: #007bff;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%280, 123, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-collapse {
  justify-content: center;
}
</style>
