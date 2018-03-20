import getCubicCoordinates from './lib/get-cubic-coordinates';
import getStepsCoordinates from './lib/get-steps-coordinates';
import * as shared from './lib/shared';
declare function getEasingCoordinates(easingFunction: string): shared.coordinate[];
export { getStepsCoordinates, getCubicCoordinates, getEasingCoordinates as default };
