// solving this problem with DP bottom up approach
function waysToClimb(totalNumOfSteps) {
    // the number of elements = totalNumberOfSteps + 1 because 
    // you need to count in 0 too. 0 step is your base case, which represents do nothing
    const elements = Array(totalNumOfSteps + 1).fill(0);
    elements[0] = 1; // base case

    for (let currentIndex = 0; currentIndex < elements.length; currentIndex++) {
        // say you have 8 steps total, then your elements will be 0-8
        // so we will process a[ii+1] if ii+1 < numberOfElements = 9
        if (currentIndex + 1 < elements.length) {
            elements[currentIndex + 1] += elements[currentIndex];
        }

        if (currentIndex + 3 < elements.length) {
            elements[currentIndex + 3] += elements[currentIndex];
        }

        if (currentIndex + 5 < elements.length) {
            elements[currentIndex + 5] += elements[currentIndex];
        }
    }

    return elements[elements.length - 1];
}

console.log(waysToClimb(8)); // this should return 19