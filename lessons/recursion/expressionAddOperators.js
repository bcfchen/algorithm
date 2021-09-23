/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (numStr, target) {
    const results = [];

    function helper(currentIndex, prevNum, totalVal, slate) {
        if (currentIndex === numStr.length && totalVal === target) {
            results.push(slate);
            return
        }

        const lastIndex = numStr[currentIndex] === '0' ? currentIndex + 1 : numStr.length;

        for (let endIndex = currentIndex; endIndex < numStr.length; endIndex++) {
            const currentNum = parseInt(numStr.slice(currentIndex, endIndex + 1), 10);

            if (slate === '') {
                helper(endIndex + 1, currentNum, currentNum, `${currentNum}`);
            } else {
                // +
                helper(endIndex + 1, currentNum, totalVal + currentNum, slate + `+${currentNum}`);

                // -
                // helper(endIndex + 1, 0 - currentNum, totalVal - currentNum, slate + `-${currentNum}`);

                // *
                const product = prevNum * currentNum;
                const curentTotal = (totalVal - prevNum) + product;
                helper(endIndex + 1, product, curentTotal, slate + `*${currentNum}`);
            }
        }
    }

    helper(0, 0, 0, '');
    return results;
};

console.log(addOperators('00000000010', 0));