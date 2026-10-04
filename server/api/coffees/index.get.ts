import { coffees } from '../../utils/coffees'

export default defineEventHandler((event) => {
  const { roast } = getQuery(event)
  return roast ? coffees.filter(c => c.roast === roast) : coffees
})
