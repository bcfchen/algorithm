/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let startIndex = 0, endIndex = numbers.length - 1;
    while (startIndex < endIndex) {
        const currentSum = numbers[startIndex] + numbers[endIndex];
        if (currentSum > target) {
            endIndex--;
        } else if (currentSum < target) {
            startIndex++;
        } else {
            //One thing is kind of weird: the problem asks for indices of the two numbers (1-indexed), 
            // so we have to add 1 to the resulting indices
            return [startIndex + 1, endIndex + 1];
        }
    }
};