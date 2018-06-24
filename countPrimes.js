/*
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    if (n === 2){
        return 0;
    }
    
    let counter = 0;
    let lookAheadArray = [];
    for (let ii=2;ii<n; ii++){
        /*  if the value at ii is undefined, it means it's not a multiple (as calculated by line 22)
         *  hence it is a prime. assign 1 to the element to save space
         */
        if (lookAheadArray[ii] === undefined){
            lookAheadArray[ii] = 1;
            counter ++;

            // looks ahead and finds all numbers < n that are multiples. these are the NON primes
            let jj = 2;
            while (ii * jj < n){
                lookAheadArray[ii*jj] = 0;
                jj++;
            }
        }
    }
    
    return counter;
};