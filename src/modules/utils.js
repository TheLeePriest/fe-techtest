export const numberArrayGenerator = (startNumber, endNumber) => new Array(endNumber - startNumber + 1).fill(0).map((value, index) => index + startNumber)
