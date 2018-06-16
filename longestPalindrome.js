var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let currentMaxLength = 0,
        startIndex = 0,
        currentIndex = 0;
    while(currentIndex < s.length){
        let low = currentIndex,
            high = currentIndex;
        while(high < s.length-1 && s[high] === s[high+1]){
            high++;
        }
        currentIndex = high + 1;
        while(high < s.length -1 && low > 0 && s[high+1] === s[low-1]){
            high++;
            low--;
        }
        
        let newLength = high - low + 1;
        if (currentMaxLength < newLength){
            currentMaxLength = newLength;
            startIndex = low;
        }
    }
    
    return s.substring(startIndex, startIndex + currentMaxLength);
};