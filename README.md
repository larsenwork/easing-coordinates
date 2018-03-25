# Easing Coordinates

[![NPM Version][npm-img]][npm]
[![NPM Monthly Downloads][dm-img]][npm]
[![Build Status][ci-img]][ci]
[![Code Coverage][cvg-img]][cvg]
[![Dependency status][dpd-img]][dpd]
<br>
[![MIT License][mit-img]][mit]
[![Code Style: Prettier][prt-img]][prt]
[![Follow Larsenwork on Twitter][twt-img]][twt]

Utility to turn steps and cubic-bezier
[single-transition-timing-functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function)
into an array of "low-poly" xy-coordinates.

## Usage

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

Use `stepsCoordinates` and `cubicCoordinates` methods directly depending on your
data:

```js
import { cubicCoordinates, easingCoordinates, stepsCoordinates } from 'easing-coordinates'

easingCoordinates('cubic-bezier(0.42, 0, 0.58, 1)') === cubicCoordinates(0.42, 0, 0.58, 1)
easingCoordinates('steps(4, skip-end)') === stepsCoordinates(4, 'skip-end')
```

Increase hypotSize (default = 0.1) to get a "lower-poly" version of your cubic-bezier
functions and make sure incrementSize is always smaller than hypotSize.

```ts
interface ICoordinate {
  x: number
  y: number
}

function easingCoordinates(
  easingFunction: string,
  hypotSize?: number,
  incrementSize?: number
): ICoordinate[]

function stepsCoordinates(steps: number, skip = 'skip-end'): ICoordinate[]

function cubicCoordinates(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  hypotSize = 0.1,
  incrementSize = 0.001
): ICoordinate[]
```

<br>

## Build

(See package.json for more scripts)

```bash
# Checkout and then
npm install

# Compile and watch the .ts files
npm run watch

# Run test
npm run test
```

[npm-img]: https://img.shields.io/npm/v/easing-coordinates.svg?longCache=true&style=flat-square
[npm]: https://www.npmjs.com/package/easing-coordinates
[dm-img]: https://img.shields.io/npm/dm/easing-coordinates.svg?longCache=true&style=flat-square
[ci-img]: https://img.shields.io/travis/larsenwork/easing-coordinates.svg?branch=master&longCache=true&style=flat-square
[ci]: https://travis-ci.org/larsenwork/easing-coordinates
[cvg-img]: https://img.shields.io/coveralls/larsenwork/easing-coordinates.svg?longCache=true&style=flat-square
[cvg]: https://coveralls.io/github/larsenwork/easing-coordinates
[dpd-img]: https://img.shields.io/david/larsenwork/easing-coordinates.svg?longCache=true&style=flat-square
[dpd]: https://david-dm.org/larsenwork/easing-coordinates
[mit-img]: https://img.shields.io/github/license/larsenwork/easing-coordinates.svg?longCache=true&style=flat-square
[mit]: https://github.com/larsenwork/easing-coordinates/blob/master/LICENSE
[twt-img]: https://img.shields.io/twitter/follow/larsenwork.svg?label=follow+larsenwork&longCache=true&style=flat-square
[twt]: https://twitter.com/larsenwork
[prt-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?longCache=true&style=flat-square
[prt]: https://github.com/prettier/prettier
