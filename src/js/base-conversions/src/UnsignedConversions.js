import BaseConversion from "./BaseConversion.js";
import { uBinToOct, uBinToDec, uBinToHex, uOctToBin, uOctToDec, uOctToHex, uDecToBin, uDecToOct, uDecToHex, uHexToBin, uHexToDec, uHexToOct } from "./conversions.js";
const BINARY = 2;
const OCTAL = 8;
const DECIMAL = 10;
const HEX = 16;
const uConversions = {
    "2:8": uBinToOct, "2:10": uBinToDec, "2:16": uBinToHex,
    "8:2": uOctToBin, "8:10": uOctToDec, "8:16": uOctToHex,
    "10:2": uDecToBin, "10:8": uDecToOct, "10:16": uDecToHex,
    "16:2": uHexToBin, "16:8": uHexToOct, "16:10": uHexToDec
};
Object.freeze(uConversions);
/** A class that converts a given unsigned number and base into another base. */
export default class UnsignedBaseConversion extends BaseConversion {
    constructor(currentBase, number) {
        super(currentBase, number);
    }
    asBinary() {
        if (this.base === BINARY)
            return this._sameBase();
        const conversionFunc = uConversions[`${this.base}:2`];
        const data = conversionFunc(this.number);
        return {
            base: BINARY,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asOctal() {
        if (this.base === OCTAL)
            return this._sameBase();
        const conversionFunc = uConversions[`${this.base}:8`];
        const data = conversionFunc(this.number);
        return {
            base: OCTAL,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asDecimal() {
        if (this.base === DECIMAL)
            return this._sameBase();
        const conversionFunc = uConversions[`${this.base}:10`];
        const data = conversionFunc(this.number);
        return {
            base: DECIMAL,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asHex() {
        if (this.base === HEX)
            return this._sameBase();
        const conversionFunc = uConversions[`${this.base}:16`];
        const data = conversionFunc(this.number);
        return {
            base: HEX,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
}
