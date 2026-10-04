<script setup lang="ts">
useHead({ title: 'Nos cafés — Kōji Coffee' })

const roast = ref<'' | 'filtre' | 'espresso'>('')
const { data: coffees } = await useFetch('/api/coffees', { query: { roast } })
</script>

<template>
  <main class="section">
    <h1>Nos cafés</h1>
    <p class="lead">Quatre origines, torréfiées chaque lundi. Choisissez selon votre méthode d'extraction.</p>
    <div class="filters">
      <button :class="{ on: roast === '' }" @click="roast = ''">Tous</button>
      <button :class="{ on: roast === 'filtre' }" @click="roast = 'filtre'">Filtre</button>
      <button :class="{ on: roast === 'espresso' }" @click="roast = 'espresso'">Espresso</button>
    </div>
    <div class="grid">
      <NuxtLink v-for="c in coffees" :key="c.slug" :to="`/cafes/${c.slug}`" class="card">
        <div class="swatch" :style="{ background: c.color }" />
        <small>{{ c.origin }} · {{ c.process }}</small>
        <h3>{{ c.name }}</h3>
        <p>{{ c.notes.join(', ') }}.</p>
        <div class="tags"><span>{{ c.roast }}</span><span>{{ c.price }} €</span></div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
h1 { font-size: clamp(40px, 6vw, 80px); text-transform: uppercase; }
.lead { margin: 12px 0 24px; opacity: .8; max-width: 520px; }
.filters { display: flex; gap: 10px; margin-bottom: 28px; }
.filters button { font: inherit; font-weight: 700; border: 2px solid var(--brown); background: none; color: var(--brown); border-radius: 99px; padding: 10px 18px; cursor: pointer; }
.filters button.on { background: var(--brown); color: var(--cream); }
.swatch { height: 120px; border-radius: 16px; margin-bottom: 16px; }
</style>
