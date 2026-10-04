import { coffees } from '../../utils/coffees'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const coffee = coffees.find(c => c.slug === slug)
  if (!coffee) throw createError({ statusCode: 404, statusMessage: 'Café introuvable' })
  return coffee
})
