# Kōji Coffee

Concept de site e-commerce pour un torréfacteur de café de spécialité. **Kōji Coffee est une marque fictive** : ce projet est un exercice de design et de développement front/back.

## Pages

- `/` : accueil avec hero typographique et sélection du moment
- `/cafes` : catalogue filtrable (filtre / espresso), filtré côté serveur
- `/cafes/:slug` : fiche café avec choix de mouture, quantité et ajout au panier
- `/abonnement` : configurateur d'abonnement (formule + fréquence)

## API (Nitro / Node)

- `GET /api/coffees?roast=filtre|espresso`
- `GET /api/coffees/:slug`

## Stack

Nuxt 4 · Vue 3 · TypeScript · Nitro (Node)

## Lancer le projet

```bash
pnpm install
pnpm dev
```
