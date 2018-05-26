const Bezier = require('bezier-js')
// import { Bezier } from 'bezier-js'
// import * as Bezier from 'bezier-js'
import * as shared from './shared'
export function cubicCoordinates(x1, y1, x2, y2, steps = 10) {
  const curve = new Bezier(0, 0, x1, y1, x2, y2, 1, 1)
  const coordinates = curve.getLUT(steps)
  const roundedCoordinates = coordinates.map(obj => shared.getCoordinate(obj.x, obj.y))
  return roundedCoordinates
}
