/** Converts a string to a super script string */
const superScript = (str) => str.replace(/([0-9])/g, (match, p1) => `⁰¹²³⁴⁵⁶⁷⁸⁹`[p1]);
/** Makes sure the binary string contains only `1`'s & `0`'s */
const cleanBinary = (binary) => binary.replace(/[^01]*/g, "");
/** Makes sure the octal string contains only `0`-`7` */
const cleanOctal = (octal) => octal.replace(/[^0-7]*/g, "");
/** Makes sure the decimal string contains only `0`-`9`  */
const cleanDecimal = (decimal) => (decimal.startsWith("-")) ? `-${decimal.replace(/[^\d]*/g, "")}` : decimal.replace(/[^\d]*/g, "");
/** Makes sure the hexadecimal string contains only `0`-`9` & `A`-`F` */
const cleanHex = (hexadecimal) => hexadecimal.replace(/[^0-9A-F]*/gi, "");
/** Removes leading zeros from a string */
const removeLeadingZeros = (str) => str.toString().replace(/^0+/, "");
const invertBinary = (binary) => {
    for (let i = 0; i < binary.length; i++) {
        binary[i] = (binary[i] === "1") ? "0" : "1";
    }
};
const nextHighestPower = (num, signed = false, base = 2) => {
    let n = 0;
    let power = 0;
    const isNegative = (num < 0);
    if (isNegative) {
        num = (num * -1) - 1;
        signed = true;
    }
    // eslint-disable-next-line no-constant-condition
    for (let i = 0; true; i++) {
        const pow = Math.pow(base, i);
        n = pow;
        power = i;
        if (pow > num)
            break;
    }
    if (signed)
        power += 1;
    return power;
};
const getBounds = (pow) => {
    const power = Math.pow(2, pow - 1);
    return { lower: -power, upper: power - 1 };
};
export { cleanBinary, cleanDecimal, cleanHex, cleanOctal, invertBinary, removeLeadingZeros, superScript, nextHighestPower, getBounds };
