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