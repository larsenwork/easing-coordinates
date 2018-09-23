const getParenthesisContent = str => {
  return str
    .slice(str.indexOf('(') + 1, str.lastIndexOf(')'))
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== '')
}
const convertToNumberMaybe = str => (Number.isNaN(Number(str)) ? str : Number(str))
const roundToMaxTenDecimals = num => +num.toFixed(10)
export const getCoordinate = (x, y) => {
  return {
    x: roundToMaxTenDecimals(x),
    y: roundToMaxTenDecimals(y),
  }
}
export const getFunctionArguments = functionAsString => {
  return getParenthesisContent(functionAsString).map(arg => convertToNumberMaybe(arg))
}
