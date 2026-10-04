export type Coffee = {
  slug: string
  name: string
  origin: string
  process: string
  notes: string[]
  roast: 'filtre' | 'espresso'
  price: number
  color: string
  story: string
}

export const coffees: Coffee[] = [
  { slug: 'guji-hambela', name: 'Guji Hambela', origin: 'Éthiopie', process: 'Lavé', notes: ['Pêche blanche', 'Jasmin', 'Thé noir'], roast: 'filtre', price: 14, color: '#a7d7c5', story: 'Cultivé à 2 100 m d\'altitude par une coopérative de 600 petits producteurs.' },
  { slug: 'el-paraiso', name: 'Finca El Paraíso', origin: 'Colombie', process: 'Double fermentation', notes: ['Fruits rouges', 'Cacao', 'Cannelle'], roast: 'espresso', price: 16, color: '#f4b5a0', story: 'Une ferme familiale du Cauca qui expérimente des fermentations longues.' },
  { slug: 'fazenda-ambiental', name: 'Fazenda Ambiental', origin: 'Brésil', process: 'Nature', notes: ['Noisette', 'Caramel', 'Chocolat au lait'], roast: 'espresso', price: 12, color: '#f2d38a', story: 'Le café rond et réconfortant de la maison, parfait en lait.' },
  { slug: 'kiambu-aa', name: 'Kiambu AA', origin: 'Kenya', process: 'Lavé', notes: ['Cassis', 'Pamplemousse', 'Sucre roux'], roast: 'filtre', price: 15, color: '#c9b6e4', story: 'Un grand classique kenyan, vif et juteux, pour les amateurs d\'acidité.' },
]
