<script setup lang="ts">
const { data: coffees } = await useFetch('/api/coffees')
</script>

<template>
  <main>
    <section class="hero">
      <div>
        <h1>Café de spécialité, torréfié lundi.</h1>
        <p>Des grains tracés jusqu'à la ferme, torréfiés en petits lots à Montreuil et livrés chez vous en 48 h.</p>
        <NuxtLink to="/cafes" class="btn">Choisir mon café →</NuxtLink>
      </div>
      <div class="bag"><b>KŌJI</b><small>ÉTHIOPIE · GUJI</small></div>
      <div class="stamp">TORRÉFIÉ<br>À PARIS</div>
    </section>

    <section class="section">
      <h2 class="title">Les cafés du moment</h2>
      <div class="grid">
        <NuxtLink v-for="c in coffees?.slice(0, 3)" :key="c.slug" :to="`/cafes/${c.slug}`" class="card">
          <small>{{ c.origin }}</small>
          <h3>{{ c.name }}</h3>
          <p>{{ c.notes.join(', ') }}.</p>
          <div class="tags"><span>{{ c.roast }}</span><span>{{ c.price }} € · 250 g</span></div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero { margin: 0 24px; border-radius: 36px; background: var(--rust); color: var(--cream); padding: 70px 48px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 30px; align-items: center; position: relative; overflow: hidden; }
h1 { font-weight: 800; font-size: clamp(48px, 7vw, 110px); line-height: .9; text-transform: uppercase; letter-spacing: -2px; }
.hero p { font-size: 18px; max-width: 420px; margin: 22px 0 30px; line-height: 1.5; opacity: .92; }
.bag { justify-self: center; width: 240px; height: 320px; background: var(--mint); border-radius: 14px 14px 22px 22px; transform: rotate(6deg); box-shadow: 0 30px 60px rgba(59, 36, 24, .35); display: flex; flex-direction: column; justify-content: center; align-items: center; color: var(--brown); font-family: Syne, sans-serif; position: relative; }
.bag::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 40px; background: repeating-linear-gradient(90deg, rgba(59, 36, 24, .12) 0 6px, transparent 6px 12px); border-radius: 14px 14px 0 0; }
.bag b { font-size: 42px; }
.bag small { font-family: Inter, sans-serif; font-size: 13px; letter-spacing: .2em; margin-top: 6px; }
.stamp { position: absolute; right: 250px; bottom: 40px; width: 110px; height: 110px; border-radius: 50%; border: 2px dashed var(--cream); display: grid; place-items: center; text-align: center; font-family: Syne, sans-serif; font-weight: 700; font-size: 13px; transform: rotate(-12deg); }
.title { font-size: 36px; margin-bottom: 24px; }
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; padding: 40px 20px; margin: 0 12px; }
  .stamp { display: none; }
}
</style>
