import * as BezierEasing from 'bezier-easing'
import * as hypot from 'hypot'

const roundToMaxTenDecimals = (number: number) => Number(`${+number.toFixed(10)}`)

export default function (x1: number, y1: number, x2: number, y2: number, hypotLimit = 0.1, incrementSize = 0.001): { x: number, y: number }[] {
  const bezier = BezierEasing(x1, y1, x2, y2)
  let x = 0
  let y = 0
  let xOld = 0
  let yOld = 0
  let firstTime = true
  let coordinates = []

  // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within 90% of average distance between coordinates
  while (firstTime || hypot(1 - xOld, 1 - yOld) < hypotLimit * 0.9) {
    if (firstTime) {
      firstTime = false
    } else {
      // Reset values
      x = 0
      y = 0
      xOld = 0
      yOld = 0
      coordinates = []
      // Decrease hypotLimit by incrementSize
      hypotLimit -= incrementSize
    }
    // Loop and add coordinates every time it's far enough away from the previous one
    while (x <= 1) {
      y = bezier(x)
      if (hypot(x - xOld, y - yOld) > hypotLimit) {
        coordinates.push({
          x: roundToMaxTenDecimals(x),
          y: roundToMaxTenDecimals(y),
        })
        xOld = x
        yOld = y
      }
      x += incrementSize
    }
  }
  // Add start and stop coordinates
  coordinates = [
    {
      x: 0,
      y: 0,
    },
    ...coordinates,
    {
      x: 1,
      y: 1,
    },
  ]

  return coordinates
}
