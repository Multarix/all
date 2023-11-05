import BaseConversion from "./BaseConversion.js";
import { ConversionOutput } from "./types/interfaces.js";
import { Base, NumberLike } from "./types/types";
/** A class that converts a given unsigned number and base into another base. */
export default class UnsignedBaseConversion extends BaseConversion {
    constructor(currentBase: Base, number: NumberLike);
    asBinary(): ConversionOutput;
    asOctal(): ConversionOutput;
    asDecimal(): ConversionOutput;
    asHex(): ConversionOutput;
}
