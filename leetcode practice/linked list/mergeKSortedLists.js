/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeTwoLists(listA, listB) {
    const mergedHead = new ListNode(0);
    let listM = mergedHead;

    while (listA && listB) {
        if (listA.val <= listB.val) {
            listM.next = listA;
            listA = listA.next;
        } else {
            listM.next = listB;
            listB = listB.next;
        }

        listM = listM.next;
    }

    if (!listB) {
        listM.next = listA;
    }

    if (!listA) {
        listM.next = listB;
    }

    return mergedHead.next;
}

var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) { return null; }

    while (lists.length > 1) {
        const listA = lists.shift();
        const listB = lists.shift();
        const listAB = mergeTwoLists(listA, listB);
        lists.push(listAB);
    }

    return lists[0];
}
