"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getParenthesisContent = (str) => {
    return str
        .slice(str.indexOf('(') + 1, str.lastIndexOf(')')).split(',')
        .map(item => item.trim());
};
const convertToNumberMaybe = (str) => Number.isNaN(Number(str)) ? str : Number(str);
exports.roundToMaxTenDecimals = (number) => Number(`${+number.toFixed(10)}`);
exports.getCoordinate = (x, y) => {
    return {
        x: exports.roundToMaxTenDecimals(x),
        y: exports.roundToMaxTenDecimals(y),
    };
};
exports.getFunctionArguments = (functionAsString) => {
    return getParenthesisContent(functionAsString).map(arg => convertToNumberMaybe(arg));
};
