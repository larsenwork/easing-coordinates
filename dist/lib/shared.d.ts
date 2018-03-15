export interface coordinate {
    x: number;
    y: number;
}
export declare const roundToMaxTenDecimals: (number: number) => number;
export declare const getCoordinate: (x: number, y: number) => coordinate;
export declare const getFunctionArguments: (functionAsString: string) => any[];
