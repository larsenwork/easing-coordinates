import { getEasingCoordinates, getCubicCoordinates, getStepsCoordinates } from './index'

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
]

const cubicTest2 = [
  { x: 0, y: 0 },
  { x: 0.019, y: 0.0714655527 },
  { x: 0.039, y: 0.1423025476 },
  { x: 0.06, y: 0.2132789027 },
  { x: 0.081, y: 0.2812839337 },
  { x: 0.103, y: 0.3496467348 },
  { x: 0.126, y: 0.418180504 },
  { x: 0.15, y: 0.4866577856 },
  { x: 0.175, y: 0.5548197244 },
  { x: 0.201, y: 0.6223801845 },
  { x: 0.228, y: 0.6890273721 },
  { x: 0.256, y: 0.7544240594 },
  { x: 0.286, y: 0.8203349833 },
  { x: 0.318, y: 0.8859282955 },
  { x: 0.352, y: 0.9502996909 },
  { x: 0.388, y: 1.0124633405 },
  { x: 0.427, y: 1.0727964422 },
  { x: 0.47, y: 1.1307595908 },
  { x: 0.518, y: 1.1846659862 },
  { x: 0.572, y: 1.2313501976 },
  { x: 0.634, y: 1.2660961482 },
  { x: 0.704, y: 1.28 },
  { x: 0.774, y: 1.2655211495 },
  { x: 0.835, y: 1.2282931395 },
  { x: 0.886, y: 1.1784636542 },
  { x: 0.93, y: 1.1209825808 },
  { x: 0.968, y: 1.0599610373 },
  { x: 1, y: 1 }
]

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
]

const easeTestHypot = [
  { x: 0, y: 0 },
  { x: 0.127, y: 0.1405524856 },
  { x: 0.208, y: 0.3135291619 },
  { x: 0.287, y: 0.4872575165 },
  { x: 0.38, y: 0.6530240578 },
  { x: 0.499, y: 0.801407407 },
  { x: 0.65, y: 0.9159338488 },
  { x: 0.828, y: 0.9823328575 },
  { x: 1, y: 1 }
]

const stepTestEnd = [
  { x: 0, y: 0 },
  { x: 0.25, y: 0 },
  { x: 0.25, y: 0.25 },
  { x: 0.5, y: 0.25 },
  { x: 0.5, y: 0.5 },
  { x: 0.75, y: 0.5 },
  { x: 0.75, y: 0.75 },
  { x: 1, y: 0.75 }
]

const stepTestNone = [
  { x: 0, y: 0 },
  { x: 0.25, y: 0 },
  { x: 0.25, y: 0.3333333333 },
  { x: 0.5, y: 0.3333333333 },
  { x: 0.5, y: 0.6666666667 },
  { x: 0.75, y: 0.6666666667 },
  { x: 0.75, y: 1 },
  { x: 1, y: 1 }
]

const stepTestBoth = [
  { x: 0, y: 0.2 },
  { x: 0.25, y: 0.2 },
  { x: 0.25, y: 0.4 },
  { x: 0.5, y: 0.4 },
  { x: 0.5, y: 0.6 },
  { x: 0.75, y: 0.6 },
  { x: 0.75, y: 0.8 },
  { x: 1, y: 0.8 }
]

/*
 * Test that we correct output when giving valid input
*/
test('coordinates for "cubic-bezier(0.5, 0, 0.5, 1)"', () => {
  expect(getEasingCoordinates('cubic-bezier(0.5, 0, 0.5, 1)')).toEqual(cubicTest)
});

test('coordinates for "cubic-bezier(0, 0, 0.5, 2)"', () => {
  expect(getEasingCoordinates('cubic-bezier(0, 0, 0.5, 2)')).toEqual(cubicTest2)
});

test('coordinates for "ease"', () => {
  expect(getEasingCoordinates('ease')).toEqual(easeTest)
})

test('ease shorthand is the same as equivalent cubic-bezier', () => {
  expect(getEasingCoordinates('ease-in-out')).toEqual(getEasingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)'))
})

test('coordinates for "ease" with a bigger hypotSize shoul be fewer and further appart', () => {
  expect(getEasingCoordinates('ease', 0.2)).toEqual(easeTestHypot)
})

test('getEasingCoordinates returns the same as getCubicCoordinates', () => {
  expect(getEasingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)')).toEqual(getCubicCoordinates(0.42, 0, 0.58, 1))
})

test('getEasingCoordinates returns the same as getStepsCoordinates', () => {
  expect(getEasingCoordinates('steps(4, skip-end)')).toEqual(getStepsCoordinates(4, 'skip-end'))
})

test('coordinates for "steps(4, skip-end)"', () => {
  expect(getEasingCoordinates('steps(4, skip-end)')).toEqual(stepTestEnd)
})

test('coordinates for "steps(4)" - the default is "skip-end" as per spec', () => {
  expect(getEasingCoordinates('steps(4)')).toEqual(stepTestEnd)
})


test('coordinates for "steps(4, skip-none)"', () => {
  expect(getEasingCoordinates('steps(4, skip-none)')).toEqual(stepTestNone)
})

test('coordinates for "steps(4, skip-both)"', () => {
  expect(getEasingCoordinates('steps(4, skip-both)')).toEqual(stepTestBoth)
})

test('old and new steps syntax should yield the same', () => {
  expect(getEasingCoordinates('steps(4, skip-end)')).toEqual(getEasingCoordinates('steps(4, end)'))
  expect(getEasingCoordinates('steps(2, skip-start)')).toEqual(getEasingCoordinates('steps(2, start)'))
})

/*
 * Throwing Errors when giving incorrect input
 */
test('too few input in steps should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('steps()')
  }
  expect(incorrectInput).toThrowError()
})

test('too many input in steps should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('steps(4, skip-end, 3)')
  }
  expect(incorrectInput).toThrowError()
})

test('steps without a number first should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('steps(skip-end, 4)')
  }
  expect(incorrectInput).toThrowError()
})

test('steps without a string last should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('steps(4, 4)')
  }
  expect(incorrectInput).toThrowError()
})

test('incorrect steps skips instructions should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('steps(4, skip-forward)')
  }
  expect(incorrectInput).toThrowError()
})

test('too few input in cubic should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('cubic-bezier(0.5, 0, 0.5)')
  }
  expect(incorrectInput).toThrowError()
})

test('too many input in cubic should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('cubic-bezier(0.5, 0, 0.5, 1, 1)')
  }
  expect(incorrectInput).toThrowError()
})

test('non number input in cubic should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('cubic-bezier(0.5, hello, 0.5, 1)')
  }
  expect(incorrectInput).toThrowError()
})

test('non easing function should throw an error', () => {
  function incorrectInput() {
    getEasingCoordinates('funky(0.5, 0.5, 0.5, 1, 1)')
  }
  expect(incorrectInput).toThrowError()
})
