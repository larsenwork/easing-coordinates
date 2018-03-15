const getParenthesisContent = (str: string) => {
  return str
    .slice(str.indexOf('(') + 1, str.lastIndexOf(')')).split(',')
    .map(item => item.trim())
}
const convertToNumberMaybe = (str: string): any => Number.isNaN(Number(str)) ? str : Number(str)

export interface coordinate {
  x: number,
  y: number
}

export const roundToMaxTenDecimals = (number: number): number => Number(`${+number.toFixed(10)}`)

export const getCoordinate = (x: number, y: number): coordinate => {
  return {
    x: roundToMaxTenDecimals(x),
    y: roundToMaxTenDecimals(y),
  }
}

export const getFunctionArguments = (functionAsString: string) => {
  return getParenthesisContent(functionAsString).map(arg => convertToNumberMaybe(arg))
}
