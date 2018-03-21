<h1 align="center">Easing Coordinates</h1>

<p align="center">
  <a href="https://travis-ci.org/larsenwork/easing-coordinates">
    <img alt="Travis" src="https://travis-ci.org/larsenwork/easing-coordinates.svg?branch=master">
  </a><a href="https://coveralls.io/github/larsenwork/easing-coordinates?branch=master">
    <img alt="Code coverage" src="https://coveralls.io/repos/github/larsenwork/easing-coordinates/badge.svg?branch=master">
  </a><a href="https://www.npmjs.com/package/easing-coordinates">
    <img alt="npm version" src="https://img.shields.io/npm/v/easing-coordinates.svg">
  </a><a href="https://www.npmjs.com/package/easing-coordinates">
    <img alt="monthly downloads" src="https://img.shields.io/npm/dm/easing-coordinates.svg">
  </a><a href="https://github.com/larsenwork/easing-coordinates/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/larsenwork/easing-coordinates.svg">
  </a><a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a><a href="https://twitter.com/larsenwork">
    <img alt="Follow Larsenwork on Twitter" src="https://img.shields.io/twitter/follow/larsenwork.svg?label=follow+larsenwork">
  </a>
</p>

## Usage
The easingCoordinates function takes steps and cubic-bezier [single-transition-timing-functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function) as input and returns a set of "low-poly" xy-coordinates.

```js
import { easingCoordinates } from 'easing-coordinates'

easingCoordinates('cubic-bezier(0.5, 0, 0.5, 1)')
/* => 
[
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
  { x: 1, y: 1 },
]
*/

easingCoordinates('steps(4)')
/* =>
[
  { x: 0, y: 0 },
  { x: 0.25, y: 0 },
  { x: 0.25, y: 0.25 },
  { x: 0.5, y: 0.25 },
  { x: 0.5, y: 0.5 },
  { x: 0.75, y: 0.5 },
  { x: 0.75, y: 0.75 },
  { x: 1, y: 0.75 },
]
*/
```

Use `stepsCoordinates` and `cubicCoordinates` methods directly depending on your data:
```js
import { cubicCoordinates, easingCoordinates, stepsCoordinates } from './index'

easingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)') == cubicCoordinates(0.42, 0, 0.58, 1)
easingCoordinates('steps(4, skip-end)') == stepsCoordinates(4, 'skip-end')
```

Increase hypotSize (default = 0.1) to get a "lower-poly" version of your cubic-bezier functions and make sure incrementSize is always smaller than hypotSize.
```ts
interface ICoordinate {
  x: number
  y: number
}
function easingCoordinates(easingFunction: string, hypotSize?: number, incrementSize?: number): ICoordinate[]
function stepsCoordinates(steps: number, skip = 'skip-end'): ICoordinate[]
function cubicCoordinates(x1: number, y1: number, x2: number, y2: number, hypotSize = 0.1, incrementSize = 0.001): ICoordinate[]
```
