import * as shared from './shared'

export default function (steps: number, skip = 'skip-end'): shared.coordinate[] {
  const coordinates: shared.coordinate[] = []
  let n = 0
  while (n < steps) {
    const x1 = n / steps
    const x2 = (n + 1) / steps
    let y: number
    if (skip === 'skip-none') {
      y = n / (steps - 1)
    } else if (skip === 'skip-both') {
      y = (n + 1) / (steps + 1)
    } else if (skip === 'skip-start' || skip === 'start') {
      y = (n + 1) / steps
    } else if (skip === 'skip-end' || skip === 'end') {
      y = n / steps
    } else {
      throw new Error(`Error can't recognise step skip "${skip}"`)
    }
    coordinates.push(shared.getCoordinate(x1, y))
    coordinates.push(shared.getCoordinate(x2, y))
    ++n
  }
  return coordinates
}
