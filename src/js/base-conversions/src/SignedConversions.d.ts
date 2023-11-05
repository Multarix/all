import BaseConversion from "./BaseConversion.js";
import { ConversionOutput } from "./types/interfaces";
import { Base, NumberLike } from "./types/types";
/** A class that converts a given signed number and base into another base. */
export default class SignedBaseConversion extends BaseConversion {
    constructor(currentBase: Base, number: NumberLike);
    asBinary(bits?: number): ConversionOutput;
    asOctal(bits?: number): ConversionOutput;
    asDecimal(bits?: number): ConversionOutput;
    asHex(bits?: number): ConversionOutput;
}
