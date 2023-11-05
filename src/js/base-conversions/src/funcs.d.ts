import { NumberLike } from "./types/types";
/** Converts a string to a super script string */
declare const superScript: (str: string) => string;
/** Makes sure the binary string contains only `1`'s & `0`'s */
declare const cleanBinary: (binary: string) => string;
/** Makes sure the octal string contains only `0`-`7` */
declare const cleanOctal: (octal: string) => string;
/** Makes sure the decimal string contains only `0`-`9`  */
declare const cleanDecimal: (decimal: string) => string;
/** Makes sure the hexadecimal string contains only `0`-`9` & `A`-`F` */
declare const cleanHex: (hexadecimal: string) => string;
/** Removes leading zeros from a string */
declare const removeLeadingZeros: (str: NumberLike) => string;
declare const invertBinary: (binary: string[]) => void;
declare const nextHighestPower: (num: number, signed?: boolean, base?: number) => number;
declare const getBounds: (pow: number) => {
    lower: number;
    upper: number;
};
export { cleanBinary, cleanDecimal, cleanHex, cleanOctal, invertBinary, removeLeadingZeros, superScript, nextHighestPower, getBounds };
