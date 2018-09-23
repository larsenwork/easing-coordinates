import { cubicCoordinates } from './lib/cubic-coordinates'
import * as shared from './lib/shared'
import { stepsCoordinates } from './lib/steps-coordinates'
declare function easingCoordinates(easingFunction: string, polySteps?: number): shared.ICoordinate[]
export { stepsCoordinates, cubicCoordinates, easingCoordinates, easingCoordinates as default }
