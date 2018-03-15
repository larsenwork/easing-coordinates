"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BezierEasing = require("bezier-easing");
const shared = require("./shared");
function default_1(x1, y1, x2, y2, hypotLimit = 0.1, incrementSize = 0.001) {
    const bezier = BezierEasing(x1, y1, x2, y2);
    let x = 0;
    let y = 0;
    let xOld = 0;
    let yOld = 0;
    let firstTime = true;
    let coordinates = [];
    // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within 90% of average distance between coordinates
    while (firstTime || Math.hypot(1 - xOld, 1 - yOld) < hypotLimit * 0.9) {
        if (firstTime) {
            firstTime = false;
        }
        else {
            // Decrease hypotLimit by incrementSize and reset values
            hypotLimit -= incrementSize;
            x = 0;
            y = 0;
            xOld = 0;
            yOld = 0;
            coordinates = [];
        }
        // Add the first coordinate
        shared.addCoordinate(0, 0, coordinates);
        // Loop and add coordinates every time it's far enough away from the previous one
        while (x <= 1) {
            y = bezier(x);
            if (Math.hypot(x - xOld, y - yOld) > hypotLimit) {
                shared.addCoordinate(x, y, coordinates);
                xOld = x;
                yOld = y;
            }
            x += incrementSize;
        }
        // Add the last coordinate
        shared.addCoordinate(1, 1, coordinates);
    }
    return coordinates;
}
exports.default = default_1;
