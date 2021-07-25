var groupAnagrams = function (strs) {
    const wordMap = {};
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join();
        wordMap[sortedStr] = wordMap[sortedStr] === undefined ? [str] : [...wordMap[sortedStr], str];
    })

    return Object.values(wordMap)
};