import getCubicCoordinates from './lib/get-cubic-coordinates'
import getStepsCoordinates from './lib/get-steps-coordinates'
import easingShorthandMap from './lib/easing-map'
import * as shared from './lib/shared'

function getEasingCoordinates(easingFunction: string): shared.coordinate[] {
  const errorMsgStart = `Error parsing "${easingFunction}".`

  // If a shorthand like "ease-in" is provided then convert to equivalent cubic-bezier
  if (easingShorthandMap[easingFunction]) easingFunction = easingShorthandMap[easingFunction]

  // If we think it's a steps function
  if (easingFunction.includes('steps(')) {
    const args = shared.getFunctionArguments(easingFunction)
    const [stepCount, stepSkip] = args
    if (args.length !== 2) {
      throw new Error(`${errorMsgStart} Could only find ${args.length} arguments but expected 4.`)
    } else {
      if (typeof args[0] !== 'number') {
        throw new Error(`${errorMsgStart} "${args[0]}" is not a number.`)
      } else if (typeof args[1] !== 'string') {
        throw new Error(`${errorMsgStart} "${args[1]}" is not a string.`)
      }
      return getStepsCoordinates(stepCount, stepSkip)
    }

    // If we think it's a cubic-bezier function
  } else if (easingFunction.includes('cubic-bezier(')) {
    const args = shared.getFunctionArguments(easingFunction)
    const [x1, y1, x2, y2] = args
    if (args.length !== 4) {
      throw new Error(`${errorMsgStart} Found ${args.length} arguments but expected 4.`)
    } else {
      [x1, y1, x2, y2].forEach(arg => {
        if (typeof arg !== 'number') {
          throw new Error(`${errorMsgStart} "${arg}" is not a number.`)
        }
      })
      return getCubicCoordinates(x1, y1, x2, y2)
    }

    // If it's not cubic bezier or steps it's not an easing function
  } else {
    throw new Error(`${errorMsgStart} If not a typo then please create a GitHub issue :)`)
  }
}

export {
  getStepsCoordinates,
  getCubicCoordinates,
  getEasingCoordinates as default
}
