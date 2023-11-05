import { Conversion } from "./types/interfaces";
declare function toBinary(int: number, bits: number, exponantLength?: number): Conversion;
declare function toDecimal(bin: string, exponantLength?: number): {
    newNumber: number;
    conversion: string;
};
export { toDecimal, toBinary };
