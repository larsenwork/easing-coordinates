const getParenthesisContent = (str: string) => {
  return str
    .slice(str.indexOf('(') + 1, str.lastIndexOf(')'))
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== '')
}
const convertToNumberMaybe = (str: string): any => (Number.isNaN(Number(str)) ? str : Number(str))

const roundToMaxTenDecimals = (num: number): number => +num.toFixed(10)

export interface ICoordinate {
  x: number
  y: number
}

export const getCoordinate = (x: number, y: number): ICoordinate => {
  return {
    x: roundToMaxTenDecimals(x),
    y: roundToMaxTenDecimals(y),
  }
}

export const getFunctionArguments = (functionAsString: string) => {
  return getParenthesisContent(functionAsString).map(arg => convertToNumberMaybe(arg))
}
