"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared = require("./shared");
function default_1(steps, skip = 'skip-end') {
    const coordinates = [];
    let n = 0;
    while (n < steps) {
        const x1 = n / steps;
        const x2 = (n + 1) / steps;
        let y;
        if (skip === 'skip-none') {
            y = n / (steps - 1);
        }
        else if (skip === 'skip-both') {
            y = (n + 1) / (steps + 1);
        }
        else if (skip === 'skip-start' || skip === 'start') {
            y = (n + 1) / steps;
        }
        else if (skip === 'skip-end' || skip === 'end') {
            y = n / steps;
        }
        else {
            throw new Error(`Error can't recognise step skip "${skip}"`);
        }
        shared.addCoordinate(x1, y, coordinates);
        shared.addCoordinate(x2, y, coordinates);
        ++n;
    }
    return coordinates;
}
exports.default = default_1;
