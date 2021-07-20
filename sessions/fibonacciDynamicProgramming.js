function fibonacciWithMemoization(fibIndex, map) {
    if (fibIndex === 1 || fibIndex === 2) {
        return 1;
    }
    if (map[fibIndex]) {
        return map[fibIndex];
    }

    const fibResult = fibonacciWithMemoization(fibIndex - 2, map) + fibonacciWithMemoization(fibIndex - 1, map);
    map[fibIndex] = fibResult;
    return fibResult;
}

console.log('Fib 5 by memoization is: ', fibonacciWithMemoization(5, {}));

function fibonacciWithTabulation(fibIndex) {
    if (fibIndex < 1) { throw 'bad fibIndex'; }

    // in this case we always keep track of the previous two fib indices' values
    let fibIndexMinusOneVal = 1, fibIndexMinusTwoVal = 1, currentFibResult = 1;

    // we start iterating from fibIndex = 3, since 1 and 2 are both 1
    for (let fibCount = 3; fibCount <= fibIndex; fibCount++) {
        currentFibResult = fibIndexMinusOneVal + fibIndexMinusTwoVal;

        // now we update the previous two fib indices' values
        fibIndexMinusTwoVal = fibIndexMinusOneVal;
        fibIndexMinusOneVal = currentFibResult;
    }

    return currentFibResult;
}

console.log('Fib 5 by tabulation is: ', fibonacciWithTabulation(5, {}));
