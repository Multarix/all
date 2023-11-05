import { subScript } from "./objects.js";
import { cleanBinary, cleanOctal, cleanDecimal, cleanHex } from "./funcs.js";
class BaseConversion {
    _originalBase;
    _originalNumber;
    constructor(currentBase, number) {
        if ([2, 8, 10, 16].indexOf(currentBase) === -1)
            throw new Error("Invalid base. Base must be 2, 8, 10 or 16.");
        if (typeof number !== "string" && typeof number !== "number")
            throw new Error("Invalid number. Number must be a number or number-like string.");
        this._originalBase = currentBase;
        this._originalNumber = this.cleanBase(this._originalBase, number);
        if (this._originalNumber === "")
            throw new Error("Invalid number. Number must be a valid for the respective base.");
    }
    /** Cleans the number of any invalid characters */
    cleanBase(base, number) {
        switch (base) {
            case 2: return cleanBinary(number.toString());
            case 8: return cleanOctal(number.toString());
            case 10: return cleanDecimal(number.toString());
            case 16: return cleanHex(number.toString().toUpperCase());
        }
    }
    _sameBase() {
        return {
            base: this._originalBase,
            number: this._originalNumber,
            conversion: `${this._originalNumber}${subScript[this._originalBase]} = ${this._originalNumber}${subScript[this._originalBase]}`
        };
    }
    /** The base of the original number */
    get base() {
        return this._originalBase;
    }
    /** The original number */
    get number() {
        return this._originalNumber;
    }
}
export default BaseConversion;
