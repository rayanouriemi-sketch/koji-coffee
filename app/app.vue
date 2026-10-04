<script setup lang="ts">
const cart = useState('cart', () => 0)
</script>

<template>
  <div>
    <nav class="nav">
      <NuxtLink to="/" class="logo">KŌJI*</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/cafes">Cafés</NuxtLink>
        <NuxtLink to="/abonnement">Abonnement</NuxtLink>
        <a class="cart" href="#">Panier · {{ cart }}</a>
      </div>
    </nav>
    <NuxtPage />
    <footer class="footer">
      <span>Kōji Coffee — marque fictive, projet concept.</span>
      <span>Torréfié à Montreuil</span>
    </footer>
  </div>
</template>
