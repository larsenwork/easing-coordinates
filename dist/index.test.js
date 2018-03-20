"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const cubicTest = [
    { x: 0, y: 0 },
    { x: 0.099, y: 0.0143172435 },
    { x: 0.189, y: 0.0569704145 },
    { x: 0.265, y: 0.1207430791 },
    { x: 0.329, y: 0.1976360165 },
    { x: 0.384, y: 0.281541323 },
    { x: 0.433, y: 0.3687643431 },
    { x: 0.479, y: 0.4580875338 },
    { x: 0.524, y: 0.547869462 },
    { x: 0.57, y: 0.6368561714 },
    { x: 0.619, y: 0.7234436574 },
    { x: 0.674, y: 0.8064697166 },
    { x: 0.738, y: 0.8823204807 },
    { x: 0.815, y: 0.9456314885 },
    { x: 0.906, y: 0.9871537401 },
    { x: 1, y: 1 }
];
const easeTest = [
    { x: 0, y: 0 },
    { x: 0.078, y: 0.0638426248 },
    { x: 0.132, y: 0.1498912253 },
    { x: 0.176, y: 0.2411299465 },
    { x: 0.217, y: 0.3341149122 },
    { x: 0.258, y: 0.4260516258 },
    { x: 0.302, y: 0.5172428201 },
    { x: 0.351, y: 0.6064813564 },
    { x: 0.406, y: 0.6910020791 },
    { x: 0.469, y: 0.7697611249 },
    { x: 0.541, y: 0.8402054507 },
    { x: 0.622, y: 0.8995163973 },
    { x: 0.711, y: 0.9455150493 },
    { x: 0.806, y: 0.9771659923 },
    { x: 0.905, y: 0.9948875961 },
    { x: 1, y: 1 }
];
const skipTest = [
    { x: 0, y: 0 },
    { x: 0.25, y: 0 },
    { x: 0.25, y: 0.25 },
    { x: 0.5, y: 0.25 },
    { x: 0.5, y: 0.5 },
    { x: 0.75, y: 0.5 },
    { x: 0.75, y: 0.75 },
    { x: 1, y: 0.75 }
];
/*
 * Test that we correct output when giving valid input
*/
test('coordinates for "cubic-bezier(0.5, 0, 0.5, 1)"', () => {
    expect(index_1.default('cubic-bezier(0.5, 0, 0.5, 1)')).toEqual(cubicTest);
});
test('coordinates for "ease"', () => {
    expect(index_1.default('ease')).toEqual(easeTest);
});
test('ease shorthand is the same as equivalent cubic-bezier', () => {
    expect(index_1.default('ease-in-out')).toEqual(index_1.default('cubic-bezier(0.42, 0, 0.58, 1)'));
});
test('coordinates for "steps(4, skip-end)"', () => {
    expect(index_1.default('steps(4, skip-end)')).toEqual(skipTest);
});
/*
 * Throwing Errors when giving incorrect input
 */
test('too few input in steps should throw an error', () => {
    function incorrectInput() {
        index_1.default('steps(4)');
    }
    expect(incorrectInput).toThrowError();
});
test('too many input in steps should throw an error', () => {
    function incorrectInput() {
        index_1.default('steps(4, skip-end, 3)');
    }
    expect(incorrectInput).toThrowError();
});
test('incorrect order in steps should throw an error', () => {
    function incorrectInput() {
        index_1.default('steps(skip-end, 4)');
    }
    expect(incorrectInput).toThrowError();
});
