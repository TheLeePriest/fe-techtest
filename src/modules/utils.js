export const numberArrayGenerator = (startNumber, endNumber) => new Array(endNumber - startNumber + 1).fill(0).map((value, index) => index + startNumber)

export const numberIsMultipleOf = (multipleNumber, numbersToTest) => numbersToTest.filter(number => number % multipleNumber === 0);
