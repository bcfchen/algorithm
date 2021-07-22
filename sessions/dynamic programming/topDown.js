// solving this problem with DP top down approach
function waysToClimb(totalNumberOfSteps) {
    const elements = Array(totalNumberOfSteps + 1).fill(0);
    elements[0] = 1; // base case

    // notice we iterate from 1, not 0. 0 is our base case
    for (ii = 1; ii < elements.length; ii++) {
        const valueAtIndexMinusOne = ii - 1 < 0 ? 0 : elements[ii - 1];
        const valueAtIndexMinusThree = ii - 3 < 0 ? 0 : elements[ii - 3];
        const valueAtIndexMinusFive = ii - 5 < 0 ? 0 : elements[ii - 5];

        elements[ii] = valueAtIndexMinusOne + valueAtIndexMinusThree + valueAtIndexMinusFive;
    }

    return elements[totalNumberOfSteps];
}

console.log(waysToClimb(8)); // should return 19