// let's take "babad" as an example
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let currentMaxLength = 0,
        startIndex = 0,
        currentIndex = 0;
    // iterate through "babad" starting from 0
    while (currentIndex < s.length) {
        let left = currentIndex,
            right = currentIndex;

        /* we're at "b" right now. move one to the right and check "a" to see if it is the same as "b" (obviously not in this case)
        ** if they are the same move "right" one more to the right until left and right element values are different. this would be us
        ** useful if it was something like "aaabc". if that's the case then we'd iterate to left=0 and right=3
        */
        while (right < s.length - 1 && s[right] === s[right + 1]) {
            right++;
        }

        currentIndex = right + 1;


        /* say if we're at "a" of "babad", we'd want to check one elem to the left and one elem to the right to see if the values are 
        ** the same. if so then move one element ot left and one to right until left-1 and right+1 are not the same anymore. this is 
        ** the typical case of palindrome
        */
        while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
            left--;
            right++;
        }

        let newLength = right - left + 1;
        if (newLength > currentMaxLength) {
            currentMaxLength = newLength;
            startIndex = left;
        }

    }

    return s.substring(startIndex, startIndex + currentMaxLength);
};