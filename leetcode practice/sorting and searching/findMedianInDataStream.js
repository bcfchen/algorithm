/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.leftHeap = new MaxHeap();
    this.rightHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.leftHeap.insert(num);

    // move leftHeap's max to rightHeap
    const leftHeapMax = this.leftHeap.extractMax();
    this.rightHeap.insert(leftHeapMax);

    if (this.leftHeap.getLength() < this.rightHeap.getLength()) {
        // move rightHeap's min to leftHeap
        const rightHeapMin = this.rightHeap.extractMin();
        this.leftHeap.insert(rightHeapMin);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const totalHeapSizeOdd = (this.leftHeap.getLength() + this.rightHeap.getLength()) % 2 > 0;
    if (totalHeapSizeOdd) {
        return this.leftHeap.peek();
    } else {
        return (this.leftHeap.peek() + this.rightHeap.peek()) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


class MinHeap {
    constructor(numsArr) {
        this.numsArr = numsArr ? [0, ...numsArr] : [0];
        this.build(this.numsArr);
    }

    build(numsArr) {
        // traverse upwards from bottom-most parent element 
        // and "fix" our numsArr into legit max heap at every parent node
        const lastParentIndex = Math.floor((this.numsArr.length - 1) / 2);
        for (let currentIndex = lastParentIndex; currentIndex >= 1; currentIndex--) {
            this.bubbleDown(currentIndex);
        }
    }

    insertKeepCurrentSize(number) {
        this.numsArr.push(number);
        this.swap(1, this.numsArr.length - 1);
        this.numsArr.pop();
        this.bubbleDown(1);
    }

    getLength() {
        return this.numsArr.length - 1; // -1 is to account for the 0 in front
    }

    insert(number) {
        // insert at the end of array
        this.numsArr.push(number);
        this.bubbleUp(this.numsArr.length - 1);
    }

    peek() {
        return this.numsArr[1];
    }

    extractMin() {
        this.swap(1, this.numsArr.length - 1);
        const extractedMinNum = this.numsArr.pop();
        // keep bubbling down to fix our numsArr into legit max heap
        this.bubbleDown(1);
        return extractedMinNum;
    }

    bubbleUp(startingIndex) {
        let currentIndex = startingIndex;
        let parentIndex = Math.floor(currentIndex / 2);
        while (currentIndex > 1 && this.numsArr[currentIndex] < this.numsArr[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    bubbleDown(startingIndex) {
        let currentIndex = startingIndex;
        let leftChildIndex = 2 * currentIndex;
        let rightChildIndex = 2 * currentIndex + 1;

        while (leftChildIndex < this.numsArr.length) {
            const leftChildNum = this.numsArr[leftChildIndex];
            const rightChildNum = this.numsArr[rightChildIndex] !== undefined ? this.numsArr[rightChildIndex] : Infinity;
            const indexToCompare = leftChildNum <= rightChildNum ? leftChildIndex : rightChildIndex;
            if (this.numsArr[currentIndex] > this.numsArr[indexToCompare]) {
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

class MaxHeap {
    constructor(numsArr) {
        this.numsArr = numsArr ? [0, ...numsArr] : [0];
        this.build(this.numsArr);
    }

    insert(number) {
        // insert at the end of array
        this.numsArr.push(number);
        this.bubbleUp(this.numsArr.length - 1);
    }

    peek() {
        return this.numsArr[1];
    }

    build(numsArr) {
        // iterate from end of array over each parent node.
        // at each parent node, bubble down
        const lastArrIndex = numsArr.length - 1;
        let lastParentNodeIndex = Math.floor(lastArrIndex / 2);
        for (let currentIndex = lastParentNodeIndex; currentIndex >= 1; currentIndex--) {
            this.bubbleDown(currentIndex);
        }
    }

    getLength() {
        return this.numsArr.length - 1;
    }

    extractMax() {
        // swap index 1 (root node) with last element
        this.swap(1, this.numsArr.length - 1);
        // remove last element after swap 
        const currentMax = this.numsArr.pop();

        // bubble down from root to generate a valid max heap
        this.bubbleDown(1);
        return currentMax;
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
                // update indices
                currentIndex = indexToCompare;
                leftChildIndex = 2 * currentIndex;
                rightChildIndex = 2 * currentIndex + 1;
            } else {
                return;
            }

        }
    }

    bubbleUp(startingIndex) {
        let currentIndex = startingIndex;
        let parentIndex = Math.floor(currentIndex / 2);
        while (currentIndex > 1) {
            if (this.numsArr[currentIndex] > this.numsArr[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
                parentIndex = Math.floor(currentIndex / 2);
            } else {
                return;
            }
        }
    }

    swap(index1, index2) {
        [this.numsArr[index1], this.numsArr[index2]] = [this.numsArr[index2], this.numsArr[index1]];
    }
}