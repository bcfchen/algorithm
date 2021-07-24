// Given two arrays that represent numbers, find their product
// For example, given [3, 2, 4] and [1, 1, 9], our result will be:
// [3, 2, 4, 0, 0]

function multiplyArrays(arrA, arrB) {
    let resultArr = [], zeroCount = 0;

    for (let ii = arrA.length - 1; ii >= 0; ii--) {
        let carry = 0;
        const productArr = Array(arrB.length + 1 + zeroCount).fill(0);

        for (let jj = arrB.length - 1; jj >= 0; jj--) {
            const product = (arrA[ii] * arrB[jj]) + carry;
            carry = Math.floor(product / 10);
            productArr[jj + 1] = product % 10;
        }

        productArr[0] = carry;
        resultArr = resultArr.length === 0 ? productArr : bigIntegerAddition(resultArr, productArr);
        zeroCount++;
    }

    return resultArr;
}

console.log(multiplyArrays([1, 6, 4, 3], [1, 3, 1]));
// this should output [0, 0, 2, 1, 5, 2, 3, 3]

/* these two are from the bigIntegerAddition problem */
function bigIntegerAddition(arr1, arr2) {
    // figure out who's smaller and who's larger first
    const bigArr = arr1.length > arr2.length ? arr1 : arr2;
    let smallArr = arr1.length > arr2.length ? arr2 : arr1;

    // since the two arrays could be of different sizes, we'd want to
    // padd the front of the smallerArr with zeros such that it becomes
    // the same size as the larger one
    smallArr = resizeWithZeros(smallArr, bigArr.length);

    // we create a resultArr to store the sum of the two arrays. 
    // note that it's only ever mathematicaly possible that resultArr be
    // at most one element longer than bigArr
    const resultArr = Array(bigArr.length + 1);
    let carry = 0;
    // we iterate backwards since that's how addition works
    for (let ii = bigArr.length - 1; ii >= 0; ii--) {
        const sum = smallArr[ii] + bigArr[ii] + carry;
        const smallestDigit = sum % 10;
        // assign smallestDigit to ii + 1 since resultArr is one element longer than bigArr
        resultArr[ii + 1] = smallestDigit;
        carry = Math.floor(sum / 10);
    }
    resultArr[0] = carry;

    return resultArr;
}

function resizeWithZeros(arr, sizeToBecome) {
    // we'd like our smaller array to become a certain size 
    // by padding the front of the array with zeros
    const resizedArr = Array(sizeToBecome).fill(0);
    let resizedArrBackwardsIndex = resizedArr.length - 1;
    let smallArrBackwardsIndex = arr.length - 1;

    // we start assigning smaller array's element to resized array, backwards. 
    // ex. smallArr = [1, 2], resizedArr = [0, 0, 0, 0], we start by assining element 1 of smallArr
    // to element 3 of resizedArr, and decrement these two indices at the same time, until
    // smallArr's index is 0. At this point resizedArr should be [0, 0, 1, 2]
    while (smallArrBackwardsIndex >= 0) {
        resizedArr[resizedArrBackwardsIndex] = arr[smallArrBackwardsIndex];
        resizedArrBackwardsIndex--;
        smallArrBackwardsIndex--;
    }

    return resizedArr;
}