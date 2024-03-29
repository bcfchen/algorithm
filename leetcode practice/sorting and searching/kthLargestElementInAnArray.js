/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const maxHeap = new MaxHeap(nums);

    let extractedNum = null;
    for (let ii = 0; ii < k; ii++) {
        extractedNum = maxHeap.extractMax();
    }

    return extractedNum;
};

class MaxHeap {
    constructor(numsArr) {
        this.numsArr = [0, ...numsArr];
        this.build(this.numsArr);
    }

    build(numsArr) {
        // traverse upwards from bottom-most parent element 
        // and "fix" our numsArr into legit max heap at every parent node
        const lastParentIndex = Math.floor((this.numsArr.length - 1) / 2);
        for (let currentIndex = lastParentIndex; currentIndex >= 1; currentIndex--) {
            this.bubbleDown(currentIndex);
        }
        console.info('heap: ', this.numsArr);
    }

    extractMax() {
        this.swap(1, this.numsArr.length - 1);
        const extractedMaxNum = this.numsArr.pop();
        // keep bubbling down to fix our numsArr into legit max heap
        this.bubbleDown(1);
        return extractedMaxNum;
    }

    bubbleUp(startingIndex) {
        let currentIndex = startingIndex;
        let parentIndex = Math.floor(currentIndex / 2);
        while (currentIndex > 1) {
            if (this.numsArr[currentIndex] < this.numsArr[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
                parentIndex = Math.floor(currentIndex / 2);
            } else {
                return;
            }
        }
    }

    bubbleDown(startingIndex) {
        let currentIndex = startingIndex;
        let leftChildIndex = 2 * currentIndex;
        let rightChildIndex = 2 * currentIndex + 1;

        while (leftChildIndex < this.numsArr.length) {
            const leftChildNum = this.numsArr[leftChildIndex];
            const rightChildNum = this.numsArr[rightChildIndex] !== undefined ? this.numsArr[rightChildIndex] : -Infinity;
            const indexToCompare = leftChildNum >= rightChildNum ? leftChildIndex : rightChildIndex;
            if (this.numsArr[currentIndex] < this.numsArr[indexToCompare]) {
                this.swap(currentIndex, indexToCompare);
                currentIndex = indexToCompare;
                leftChildIndex = 2 * currentIndex;
                rightChildIndex = 2 * currentIndex + 1;
            } else {
                return;
            }
        }
    }

    swap(index1, index2) {
        [this.numsArr[index1], this.numsArr[index2]] = [this.numsArr[index2], this.numsArr[index1]];
    }
}
