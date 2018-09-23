'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const shared = require('./shared')
function points(polySteps) {
  const increment = 1 / polySteps
  let coordinates = []
  for (let i = 0; i <= 1; i += increment) {
    coordinates.push({
      x: getX(i),
      y: getY(i),
    })
  }
  return coordinates
}
function getX(t, x1, x2) {
  return (
    (1 - t) * (1 - t) * (1 - t) * 0 +
    3 * ((1 - t) * (1 - t)) * t * x1 +
    3 * (1 - t) * (t * t) * x2 +
    t * t * t * 1
  )
}
function getY(t, y1, y2) {
  return (
    (1 - t) * (1 - t) * (1 - t) * 0 +
    3 * ((1 - t) * (1 - t)) * t * y1 +
    3 * (1 - t) * (t * t) * y2 +
    t * t * t * 1
  )
}
function cubicCoordinates(x1, y1, x2, y2, polySteps = 10) {
  const curve = new Bezier(0, 0, x1, y1, x2, y2, 1, 1)
  const coordinates = curve.getLUT(polySteps)
  const roundedCoordinates = coordinates.map(obj => shared.getCoordinate(obj.x, obj.y))
  return roundedCoordinates
}
exports.cubicCoordinates = cubicCoordinates
