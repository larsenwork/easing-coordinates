export interface ICoordinate {
  x: number
  y: number
}
export declare const getCoordinate: (x: number, y: number) => ICoordinate
export declare const getFunctionArguments: (functionAsString: string) => any[]
