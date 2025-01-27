/* eslint-disable prettier/prettier */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((strs: string): number => parseInt(strs, 10));
    const nums = integers.map((ints: number): number =>
        Number.isNaN(ints) ? 0 : ints
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //convert the array to only numbers
    const noSign = amounts.map((amount: string): number => {
        const replaced = amount.replace(/^\$/, "");
        const parsedNum = parseInt(replaced, 10);
        return !isNaN(parsedNum) ? parsedNum : 0;
    });
    return noSign;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclaims = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    ); //this filters out and removes the messages ending with a "?"
    const upper = exclaims.map((exc: string): string =>
        exc[exc.length - 1] === "!" ? exc.toUpperCase() : exc
    ); //this conditionally modifies the array so only the strings ending with "!" will be make uppercase
    return upper;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            colors.length === 0
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const adding = addends.join("+");
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const str = sum + "=" + adding;
    return str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const findInd = values.findIndex((val: number): boolean => val < 0); //finds the indices of all numbers <0
    let newArr: number[];
    if (findInd !== -1) {
        const sum = values
            .slice(0, findInd)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        newArr = [...values];
        newArr.splice(findInd + 1, 0, sum);
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newArr = [...values, sum];
    }

    return newArr;
}
