"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_cubic_coordinates_1 = require("./lib/get-cubic-coordinates");
const get_steps_coordinates_1 = require("./lib/get-steps-coordinates");
const easing_map_1 = require("./lib/easing-map");
const shared = require("./lib/shared");
function tester(easingFunction) {
    const errorMsgStart = `Error parsing "${easingFunction}".`;
    // If a shorthand like "ease-in" is provided then convert to equivalent cubic-bezier
    if (easing_map_1.default[easingFunction])
        easingFunction = easing_map_1.default[easingFunction];
    // If we think it's a steps function
    if (easingFunction.includes('steps(')) {
        const args = shared.getFunctionArguments(easingFunction);
        const [stepCount, stepSkip] = args;
        if (args.length !== 2) {
            throw new Error(`${errorMsgStart} Could only find ${args.length} arguments but expected 4.`);
        }
        else {
            if (typeof args[0] !== 'number') {
                throw new Error(`${errorMsgStart} "${args[0]}" is not a number.`);
            }
            else if (typeof args[1] !== 'string') {
                throw new Error(`${errorMsgStart} "${args[1]}" is not a number.`);
            }
            return get_steps_coordinates_1.default(stepCount, stepSkip);
        }
        // If we think it's a cubic-bezier function
    }
    else if (easingFunction.includes('cubic-bezier(')) {
        const args = shared.getFunctionArguments(easingFunction);
        const [x1, y1, x2, y2] = args;
        if (args.length !== 4) {
            throw new Error(`${errorMsgStart} Found ${args.length} arguments but expected 4.`);
        }
        else {
            [x1, y1, x2, y2].forEach(arg => {
                if (typeof arg !== 'number') {
                    throw new Error(`${errorMsgStart} "${arg}" is not a number.`);
                }
            });
            return get_cubic_coordinates_1.default(x1, y1, x2, y2);
        }
        // If it's not cubic bezier or steps it's not an easing function
    }
    else {
        throw new Error(`${errorMsgStart} If not a typo then please create a GitHub issue :)`);
    }
}
exports.tester = tester;
console.log(tester('cubic-bezier(0.5, 0, 0.5, 1)'));
console.log('hej');
