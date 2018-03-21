import * as BezierEasing from 'bezier-easing';
import * as shared from './shared';
export function cubicCoordinates(x1, y1, x2, y2, hypotSize = 0.1, incrementSize = 0.001) {
    const bezier = BezierEasing(x1, y1, x2, y2);
    let x = 0;
    let y = 0;
    let xOld = 0;
    let yOld = 0;
    let firstTime = true;
    let coordinates = [];
    // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within 90% of average distance between coordinates
    while (firstTime || Math.hypot(1 - xOld, 1 - yOld) < hypotSize * 0.9) {
        if (firstTime) {
            firstTime = false;
        }
        else {
            // Decrease hypotSize by incrementSize and reset values
            hypotSize -= incrementSize;
            x = 0;
            y = 0;
            xOld = 0;
            yOld = 0;
            coordinates = [];
        }
        // Add the first coordinate
        coordinates.push(shared.getCoordinate(0, 0));
        // Loop and add coordinates every time it's far enough away from the previous one
        while (x <= 1) {
            y = bezier(x);
            if (Math.hypot(x - xOld, y - yOld) > hypotSize) {
                coordinates.push(shared.getCoordinate(x, y));
                xOld = x;
                yOld = y;
            }
            x += incrementSize;
        }
        // Add the last coordinate
        coordinates.push(shared.getCoordinate(1, 1));
    }
    return coordinates;
}
