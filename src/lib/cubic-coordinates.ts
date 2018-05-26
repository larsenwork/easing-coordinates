declare const require: any

const Bezier = require('bezier-js')
import * as shared from './shared'

export function cubicCoordinates(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  polySteps = 10
): shared.ICoordinate[] {
  const curve = new Bezier(0, 0, x1, y1, x2, y2, 1, 1)
  const coordinates = curve.getLUT(polySteps)
  const roundedCoordinates = coordinates.map((obj: shared.ICoordinate) =>
    shared.getCoordinate(obj.x, obj.y)
  )
  return roundedCoordinates
}
