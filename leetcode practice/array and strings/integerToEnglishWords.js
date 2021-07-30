/**
 * @param {number} num
 * @return {string}
 */

const BELOW_TWENTY = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
const TIES = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const HUNDREDS = ['Hundred'];

var numberToWords = function (num) {
    if (num === 0) {
        return BELOW_TWENTY[0];
    }

    let wordsStr = '';
    for (let thousandsIndex = THOUSANDS.length - 1; thousandsIndex >= 0; thousandsIndex--) {
        const thousandsPower = Math.pow(1000, thousandsIndex);
        // skip this thousands if it's bigger than num.
        // ex. if thousands is 1,000,000 and our num is 123,000, then skip
        // and move onto the next thousands, which is 1,000
        if (thousandsPower > num) {
            continue;
        }

        const numDividedByThousands = Math.floor(num / thousandsPower);
        const thousandsPrefixWords = processLessThanThousand(numDividedByThousands);
        wordsStr += thousandsPrefixWords;

        wordsStr += THOUSANDS[thousandsIndex] === '' ? '' : THOUSANDS[thousandsIndex] + ' ';

        num %= thousandsPower;
    }

    // we do a substring here to cut out the last character of wordsStr. This
    // is because there is an extra space at the end
    return wordsStr.substring(0, wordsStr.length - 1);
}

function processLessThanThousand(num) {
    let str = '';
    if (num >= 100) {
        const numDividedByHundred = Math.floor(num / 100);
        const hundredsPrefixWord = BELOW_TWENTY[numDividedByHundred];
        str += `${hundredsPrefixWord} ${HUNDREDS[0]} `;
        num %= 100;
    }

    if (num >= 20) {
        const numDividedByTen = Math.floor(num / 10);
        const tiesWord = TIES[numDividedByTen];
        str += `${tiesWord} `;
        num %= 10;
    }

    if (num > 0) {
        str += `${BELOW_TWENTY[num]} `
    }

    return str;
}
