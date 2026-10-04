<script setup lang="ts">
const route = useRoute()
const { data: coffee, error } = await useFetch(`/api/coffees/${route.params.slug}`)
if (error.value) throw createError({ statusCode: 404, statusMessage: 'Café introuvable', fatal: true })

useHead({ title: () => `${coffee.value?.name} — Kōji Coffee` })

const cart = useState('cart', () => 0)
const grind = ref('grains')
const qty = ref(1)
const added = ref(false)
function add() {
  cart.value += qty.value
  added.value = true
  setTimeout(() => (added.value = false), 1800)
}
</script>

<template>
  <main v-if="coffee" class="section product">
    <div class="visual" :style="{ background: coffee.color }">
      <div class="bag"><b>KŌJI</b><small>{{ coffee.origin.toUpperCase() }}</small></div>
    </div>
    <div>
      <NuxtLink to="/cafes" class="back">← Tous les cafés</NuxtLink>
      <small class="kick">{{ coffee.origin }} · {{ coffee.process }}</small>
      <h1>{{ coffee.name }}</h1>
      <p class="story">{{ coffee.story }}</p>
      <div class="tags"><span v-for="n in coffee.notes" :key="n">{{ n }}</span></div>

      <label class="field">Mouture
        <select v-model="grind">
          <option value="grains">En grains</option>
          <option value="filtre">Moulu filtre</option>
          <option value="espresso">Moulu espresso</option>
        </select>
      </label>
      <div class="buy">
        <div class="qty"><button @click="qty = Math.max(1, qty - 1)">−</button><span>{{ qty }}</span><button @click="qty++">＋</button></div>
        <button class="btn btn-dark" @click="add">{{ added ? 'Ajouté ✓' : `Ajouter — ${coffee.price * qty} €` }}</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.product { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.visual { border-radius: 32px; min-height: 480px; display: grid; place-items: center; border: 2px solid var(--brown); }
.bag { width: 220px; height: 290px; background: var(--cream); border-radius: 14px 14px 22px 22px; transform: rotate(-5deg); box-shadow: 0 30px 60px rgba(59, 36, 24, .3); display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Syne, sans-serif; }
.bag b { font-size: 40px; }
.bag small { font-size: 12px; letter-spacing: .2em; }
.back { display: inline-block; margin-bottom: 18px; text-decoration: none; font-weight: 700; }
.kick { display: block; text-transform: uppercase; letter-spacing: .1em; font-weight: 700; color: var(--rust); }
h1 { font-size: clamp(40px, 5vw, 72px); line-height: 1; margin: 8px 0 16px; }
.story { line-height: 1.6; opacity: .85; max-width: 480px; }
.field { display: grid; gap: 8px; font-weight: 700; margin: 26px 0 18px; max-width: 280px; }
.field select { font: inherit; padding: 12px; border-radius: 12px; border: 2px solid var(--brown); background: #fff8ec; }
.buy { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
.qty { display: flex; align-items: center; gap: 14px; border: 2px solid var(--brown); border-radius: 99px; padding: 6px 10px; font-weight: 700; }
.qty button { width: 32px; height: 32px; border-radius: 50%; border: 0; background: none; font-size: 18px; cursor: pointer; color: var(--brown); }
@media (max-width: 860px) { .product { grid-template-columns: 1fr; } .visual { min-height: 320px; } }
</style>
