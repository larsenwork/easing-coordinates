'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const index_1 = require('./index')
const cubicTest = [
  { x: 0, y: 0 },
  { x: 0.136, y: 0.028 },
  { x: 0.248, y: 0.104 },
  { x: 0.342, y: 0.216 },
  { x: 0.424, y: 0.352 },
  { x: 0.5, y: 0.5 },
  { x: 0.576, y: 0.648 },
  { x: 0.658, y: 0.784 },
  { x: 0.752, y: 0.896 },
  { x: 0.864, y: 0.972 },
  { x: 1, y: 1 },
]
const cubicTest2 = [
  { x: 0, y: 0 },
  { x: 0.0145, y: 0.055 },
  { x: 0.056, y: 0.2 },
  { x: 0.1215, y: 0.405 },
  { x: 0.208, y: 0.64 },
  { x: 0.3125, y: 0.875 },
  { x: 0.432, y: 1.08 },
  { x: 0.5635, y: 1.225 },
  { x: 0.704, y: 1.28 },
  { x: 0.8505, y: 1.215 },
  { x: 1, y: 1 },
]
const easeTest = [
  { x: 0, y: 0 },
  { x: 0.0685, y: 0.0523 },
  { x: 0.128, y: 0.1424 },
  { x: 0.1845, y: 0.2601 },
  { x: 0.244, y: 0.3952 },
  { x: 0.3125, y: 0.5375 },
  { x: 0.396, y: 0.6768 },
  { x: 0.5005, y: 0.8029 },
  { x: 0.632, y: 0.9056 },
  { x: 0.7965, y: 0.9747 },
  { x: 1, y: 1 },
]
const easeTestFive = [
  { x: 0, y: 0 },
  { x: 0.128, y: 0.1424 },
  { x: 0.244, y: 0.3952 },
  { x: 0.396, y: 0.6768 },
  { x: 0.632, y: 0.9056 },
  { x: 1, y: 1 },
]
const stepTestEnd = [
  { x: 0, y: 0 },
  { x: 0.25, y: 0 },
  { x: 0.25, y: 0.25 },
  { x: 0.5, y: 0.25 },
  { x: 0.5, y: 0.5 },
  { x: 0.75, y: 0.5 },
  { x: 0.75, y: 0.75 },
  { x: 1, y: 0.75 },
]
const stepTestNone = [
  { x: 0, y: 0 },
  { x: 0.25, y: 0 },
  { x: 0.25, y: 0.3333333333 },
  { x: 0.5, y: 0.3333333333 },
  { x: 0.5, y: 0.6666666667 },
  { x: 0.75, y: 0.6666666667 },
  { x: 0.75, y: 1 },
  { x: 1, y: 1 },
]
const stepTestBoth = [
  { x: 0, y: 0.2 },
  { x: 0.25, y: 0.2 },
  { x: 0.25, y: 0.4 },
  { x: 0.5, y: 0.4 },
  { x: 0.5, y: 0.6 },
  { x: 0.75, y: 0.6 },
  { x: 0.75, y: 0.8 },
  { x: 1, y: 0.8 },
]
/*
 * Test that we correct output when giving valid input
*/
test('coordinates for "cubic-bezier(0.5, 0, 0.5, 1)"', () => {
  expect(index_1.easingCoordinates('cubic-bezier(0.5, 0, 0.5, 1)')).toEqual(cubicTest)
})
test('coordinates for "cubic-bezier(0, 0, 0.5, 2)"', () => {
  expect(index_1.easingCoordinates('cubic-bezier(0, 0, 0.5, 2)')).toEqual(cubicTest2)
})
test('coordinates for "ease"', () => {
  expect(index_1.easingCoordinates('ease')).toEqual(easeTest)
})
test('ease shorthand is the same as equivalent cubic-bezier', () => {
  expect(index_1.easingCoordinates('ease-in-out')).toEqual(
    index_1.easingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)')
  )
})
test('coordinates for "ease" with 5 polySteps', () => {
  expect(index_1.easingCoordinates('ease', 5)).toEqual(easeTestFive)
})
test('easingCoordinates returns the same as cubicCoordinates', () => {
  expect(index_1.easingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)')).toEqual(
    index_1.cubicCoordinates(0.42, 0, 0.58, 1)
  )
})
test('easingCoordinates returns the same as stepsCoordinates', () => {
  expect(index_1.easingCoordinates('steps(4, skip-end)')).toEqual(
    index_1.stepsCoordinates(4, 'skip-end')
  )
})
test('coordinates for "steps(4, skip-end)"', () => {
  expect(index_1.easingCoordinates('steps(4, skip-end)')).toEqual(stepTestEnd)
})
test('coordinates for "steps(4)" - the default is "skip-end" as per spec', () => {
  expect(index_1.easingCoordinates('steps(4)')).toEqual(stepTestEnd)
})
test('coordinates for "steps(4, skip-none)"', () => {
  expect(index_1.easingCoordinates('steps(4, skip-none)')).toEqual(stepTestNone)
})
test('coordinates for "steps(4, skip-both)"', () => {
  expect(index_1.easingCoordinates('steps(4, skip-both)')).toEqual(stepTestBoth)
})
test('old and new steps syntax should yield the same', () => {
  expect(index_1.easingCoordinates('steps(4, skip-end)')).toEqual(
    index_1.easingCoordinates('steps(4, end)')
  )
  expect(index_1.easingCoordinates('steps(2, skip-start)')).toEqual(
    index_1.easingCoordinates('steps(2, start)')
  )
})
/*
 * Throwing Errors when giving incorrect input
 */
test('too few input in steps should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('steps()')
  }
  expect(incorrectInput).toThrowError()
})
test('too many input in steps should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('steps(4, skip-end, 3)')
  }
  expect(incorrectInput).toThrowError()
})
test('steps without a number first should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('steps(skip-end, 4)')
  }
  expect(incorrectInput).toThrowError()
})
test('steps without a string last should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('steps(4, 4)')
  }
  expect(incorrectInput).toThrowError()
})
test('incorrect steps skips instructions should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('steps(4, skip-forward)')
  }
  expect(incorrectInput).toThrowError()
})
test('too few input in cubic should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('cubic-bezier(0.5, 0, 0.5)')
  }
  expect(incorrectInput).toThrowError()
})
test('too many input in cubic should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('cubic-bezier(0.5, 0, 0.5, 1, 1)')
  }
  expect(incorrectInput).toThrowError()
})
test('non number input in cubic should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('cubic-bezier(0.5, hello, 0.5, 1)')
  }
  expect(incorrectInput).toThrowError()
})
test('non easing function should throw an error', () => {
  function incorrectInput() {
    index_1.easingCoordinates('funky(0.5, 0.5, 0.5, 1, 1)')
  }
  expect(incorrectInput).toThrowError()
})
