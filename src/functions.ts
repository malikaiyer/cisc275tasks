/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const cel: number = (temperature - 32) * (5 / 9);
    return cel;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum1 = 0; //got an error when I added sum: number to this/ it said "Type number trivially inferred from a number literal, remove type annotation."
    if (first > 0) {
        sum1 = sum1 + first;
    }
    if (second > 0) {
        sum1 = sum1 + second;
    }
    if (third > 0) {
        sum1 = sum1 + third;
    }
    return sum1;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const msg2: string = message.toUpperCase();
    const msg3 = `${msg2}!`;
    return msg3;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.endsWith("?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() === "yes") {
        return true;
    } else if (word.toLowerCase() === "no") {
        return false;
    } else {
        return null;
    }
}
