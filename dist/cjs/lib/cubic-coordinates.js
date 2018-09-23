'use strict'
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
const shared = __importStar(require('./shared'))
function getBezier(t, n1, n2) {
  return (
    (1 - t) * (1 - t) * (1 - t) * 0 +
    3 * ((1 - t) * (1 - t)) * t * n1 +
    3 * (1 - t) * (t * t) * n2 +
    t * t * t * 1
  )
}
function cubicCoordinates(x1, y1, x2, y2, polySteps = 10) {
  const increment = 1 / polySteps
  let coordinates = []
  for (let i = 0; i <= 1; i += increment) {
    coordinates.push({
      x: getBezier(i, x1, x2),
      y: getBezier(i, y1, y2),
    })
  }
  const roundedCoordinates = coordinates.map(obj => shared.getCoordinate(obj.x, obj.y))
  return roundedCoordinates
}
exports.cubicCoordinates = cubicCoordinates
