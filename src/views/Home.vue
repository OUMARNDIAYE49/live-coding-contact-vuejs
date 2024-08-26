<template>
  <div class="home-container container text-center mt-5">
    <h1 class="display-4 mb-4">Bienvenue dans votre carnet de contacts</h1>
    <p class="lead mb-4">Gérez facilement tous vos contacts en un seul endroit.</p>
    <router-link to="/contact" class="btn btn-custom mt-3">Gérer mes contacts</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

h1 {
  color: #343a40;
}

p {
  color: #495057;
}

.btn-custom {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-custom:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.btn-custom:focus, .btn-custom:active {
  outline: none;
  box-shadow: none;
}
</style>
