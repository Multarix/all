import BaseConversion from "./BaseConversion.js";
import { sBinToOct, sBinToDec, sBinToHex, sOctToBin, sOctToDec, sOctToHex, sDecToBin, sDecToOct, sDecToHex, sHexToBin, sHexToDec, sHexToOct } from "./conversions.js";
const BINARY = 2;
const OCTAL = 8;
const DECIMAL = 10;
const HEX = 16;
const sConversions = {
    "2:8": sBinToOct, "2:10": sBinToDec, "2:16": sBinToHex,
    "8:2": sOctToBin, "8:10": sOctToDec, "8:16": sOctToHex,
    "10:2": sDecToBin, "10:8": sDecToOct, "10:16": sDecToHex,
    "16:2": sHexToBin, "16:8": sHexToOct, "16:10": sHexToDec
};
Object.freeze(sConversions);
/** A class that converts a given signed number and base into another base. */
export default class SignedBaseConversion extends BaseConversion {
    constructor(currentBase, number) {
        super(currentBase, number);
    }
    asBinary(bits = 8) {
        if (this.base === BINARY)
            return this._sameBase();
        const conversionFunc = sConversions[`${this.base}:2`];
        const data = conversionFunc(this.number, bits);
        return {
            base: BINARY,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asOctal(bits = 8) {
        if (this.base === OCTAL)
            return this._sameBase();
        const conversionFunc = sConversions[`${this.base}:8`];
        const data = conversionFunc(this.number, bits);
        return {
            base: OCTAL,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asDecimal(bits = 8) {
        if (this.base === DECIMAL)
            return this._sameBase();
        const conversionFunc = sConversions[`${this.base}:10`];
        const data = conversionFunc(this.number, bits);
        return {
            base: DECIMAL,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
    asHex(bits = 8) {
        if (this.base === HEX)
            return this._sameBase();
        const conversionFunc = sConversions[`${this.base}:16`];
        const data = conversionFunc(this.number, bits);
        return {
            base: HEX,
            number: data.newNumber,
            conversion: data.conversion
        };
    }
}
