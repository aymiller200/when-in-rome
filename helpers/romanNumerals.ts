export interface RomanNumerals {
  I: Number
  IV: Number
  V: Number
  IX: Number
  X: Number
  XL: Number
  L: Number
  XC: Number
  C: Number
  CD: Number
  D: Number
  CM: Number
  M: Number
  [key: string]: any
}

export const romeObj: RomanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}