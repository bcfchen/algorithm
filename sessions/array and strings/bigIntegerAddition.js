// Big Integer Addition
// Given two arrays that represent numbers, find their sum
// Example: 
// a = [1, 6, 4, 3]
// b = [1, 3, 1]

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
        const sum = smallArr[ii] + bigArr[ii];
        const smallestDigit = sum % 10 + carry;
        // assign smallestDigit to ii + 1 since resultArr is one element longer than bigArr
        resultArr[ii + 1] = smallestDigit;
        carry = Math.floor(sum / 10);
    }

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

console.log(bigIntegerAddition([3, 2, 4], [1, 9])); // should print 0, 3, 4, 3