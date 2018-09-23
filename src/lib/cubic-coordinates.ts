import * as shared from './shared'

function getBezier(t: number, n1: number, n2: number): number {
  return (
    (1 - t) * (1 - t) * (1 - t) * 0 +
    3 * ((1 - t) * (1 - t)) * t * n1 +
    3 * (1 - t) * (t * t) * n2 +
    t * t * t * 1
  )
}

export function cubicCoordinates(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  polySteps = 10
): shared.ICoordinate[] {
  const increment = 1 / polySteps
  let coordinates = []
  for (let i = 0; i <= 1; i += increment) {
    coordinates.push({
      x: getBezier(i, x1, x2),
      y: getBezier(i, y1, y2),
    })
  }
  const roundedCoordinates = coordinates.map((obj: shared.ICoordinate) =>
    shared.getCoordinate(obj.x, obj.y)
  )
  return roundedCoordinates
}
