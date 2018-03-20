import { cubicCoordinates } from './lib/cubic-coordinates';
import { stepsCoordinates } from './lib/steps-coordinates';
import * as shared from './lib/shared';
declare function easingCoordinates(easingFunction: string, hypotSize?: number, incrementSize?: number): shared.coordinate[];
export { stepsCoordinates, cubicCoordinates, easingCoordinates, easingCoordinates as default };
