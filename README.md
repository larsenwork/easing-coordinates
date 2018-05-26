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

cubicCoordinates(0.42, 0, 1, 1) === easingCoordinates('cubic-bezier(0.42, 0, 1, 1)')
stepsCoordinates(4, 'skip-end') === easingCoordinates('steps(4, skip-end)')
```

Increase polySteps (default = 10, min = 2) to get a "higer-poly" version of your cubic-bezier
functions.

```ts
interface ICoordinate {
  x: number
  y: number
}

function easingCoordinates(easingFunction: string, polySteps?: number): ICoordinate[]

function stepsCoordinates(steps: number, skip = 'skip-end'): ICoordinate[]

function cubicCoordinates(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  polySteps = 10
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
