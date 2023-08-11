import { ConversionOutput } from "./types/interfaces";
import { Base, NumberLike } from "./types/types";
declare abstract class BaseConversion {
    private _originalBase;
    private _originalNumber;
    constructor(currentBase: Base, number: NumberLike);
    /** Cleans the number of any invalid characters */
    private cleanBase;
    protected _sameBase(): ConversionOutput;
    /** The base of the original number */
    get base(): Base;
    /** The original number */
    get number(): NumberLike;
    /** Returns a relevant object with the number in Binary */
    abstract asBinary(): ConversionOutput;
    /** Returns a relevant object with the number in Octal */
    abstract asOctal(): ConversionOutput;
    /** Returns a relevant object with the number in Decimal */
    abstract asDecimal(): ConversionOutput;
    /** Returns a relevant object with the number in Hexadecimal */
    abstract asHex(): ConversionOutput;
}
export default BaseConversion;
