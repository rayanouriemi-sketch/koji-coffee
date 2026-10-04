<script setup lang="ts">
useHead({ title: 'Abonnement — Kōji Coffee' })

const plans = [
  { id: 'decouverte', name: 'Découverte', bags: 1, price: 14, desc: 'Un café différent chaque mois.' },
  { id: 'regulier', name: 'Régulier', bags: 2, price: 26, desc: 'Deux sachets, de quoi tenir le mois.' },
  { id: 'bureau', name: 'Bureau', bags: 5, price: 60, desc: 'Pour l\'équipe, livré chaque lundi.' },
]
const selected = ref('regulier')
const frequency = ref(4)
const plan = computed(() => plans.find(p => p.id === selected.value)!)
</script>

<template>
  <main class="section">
    <h1>L'abonnement</h1>
    <p class="lead">Recevez du café fraîchement torréfié sans y penser. Sans engagement, modifiable à tout moment.</p>
    <div class="plans">
      <button v-for="p in plans" :key="p.id" class="plan" :class="{ on: selected === p.id }" @click="selected = p.id">
        <h3>{{ p.name }}</h3>
        <p>{{ p.desc }}</p>
        <strong>{{ p.price }} € <small>/ livraison</small></strong>
        <span>{{ p.bags }} × 250 g</span>
      </button>
    </div>
    <div class="summary">
      <label>Livraison toutes les <b>{{ frequency }}</b> semaines
        <input v-model.number="frequency" type="range" min="1" max="6">
      </label>
      <p>Formule <b>{{ plan.name }}</b> · environ <b>{{ Math.round(plan.price * 4 / frequency) }} €</b> par mois</p>
      <button class="btn btn-dark">S'abonner</button>
    </div>
  </main>
</template>

<style scoped>
h1 { font-size: clamp(40px, 6vw, 80px); text-transform: uppercase; }
.lead { margin: 12px 0 28px; opacity: .8; max-width: 520px; }
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.plan { text-align: left; font: inherit; color: var(--brown); background: #fff8ec; border: 2px solid var(--brown); border-radius: 26px; padding: 26px; cursor: pointer; display: grid; gap: 10px; transition: transform .2s, box-shadow .2s; }
.plan:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0 var(--brown); }
.plan.on { background: var(--rust); color: var(--cream); }
.plan h3 { font-size: 26px; }
.plan strong { font-size: 28px; font-family: Syne, sans-serif; }
.plan small { font-size: 14px; font-family: Inter, sans-serif; }
.summary { margin-top: 28px; border: 2px dashed var(--brown); border-radius: 26px; padding: 26px; display: flex; flex-wrap: wrap; gap: 24px; align-items: center; justify-content: space-between; }
.summary label { display: grid; gap: 8px; }
@media (max-width: 860px) { .plans { grid-template-columns: 1fr; } }
</style>
