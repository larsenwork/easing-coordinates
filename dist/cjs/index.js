'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
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
const cubic_coordinates_1 = require('./lib/cubic-coordinates')
exports.cubicCoordinates = cubic_coordinates_1.cubicCoordinates
const easing_map_1 = __importDefault(require('./lib/easing-map'))
const shared = __importStar(require('./lib/shared'))
const steps_coordinates_1 = require('./lib/steps-coordinates')
exports.stepsCoordinates = steps_coordinates_1.stepsCoordinates
function easingCoordinates(easingFunction, polySteps) {
  const errorMsgStart = `Error parsing "${easingFunction}".`
  // If a shorthand like "ease-in" is provided then convert to equivalent cubic-bezier
  if (easing_map_1.default[easingFunction]) {
    easingFunction = easing_map_1.default[easingFunction]
  }
  // If we think it's a steps function
  if (easingFunction.includes('steps(')) {
    const args = shared.getFunctionArguments(easingFunction)
    const [stepCount, stepSkip] = args
    if (args.length < 1 || args.length > 2) {
      throw new Error(`${errorMsgStart} Got ${args.length} arguments but expected 1 or 2.`)
    } else {
      if (typeof args[0] !== 'number') {
        throw new Error(`${errorMsgStart} "${args[0]}" is not a number.`)
      } else if (args.length === 2 && typeof args[1] !== 'string') {
        throw new Error(`${errorMsgStart} "${args[1]}" is not a string.`)
      }
      return steps_coordinates_1.stepsCoordinates(stepCount, stepSkip)
    }
    // If we think it's a cubic-bezier function
  } else if (easingFunction.includes('cubic-bezier(')) {
    const args = shared.getFunctionArguments(easingFunction)
    const [x1, y1, x2, y2] = args
    if (args.length !== 4) {
      throw new Error(`${errorMsgStart} Got ${args.length} arguments but expected 4.`)
    } else {
      args.forEach(arg => {
        if (typeof arg !== 'number') {
          throw new Error(`${errorMsgStart} "${arg}" is not a number.`)
        }
      })
      return cubic_coordinates_1.cubicCoordinates(x1, y1, x2, y2, polySteps)
    }
    // If it's not cubic bezier or steps it's not an easing function
  } else {
    throw new Error(`${errorMsgStart} If not a typo then please create a GitHub issue :)`)
  }
}
exports.easingCoordinates = easingCoordinates
exports.default = easingCoordinates
