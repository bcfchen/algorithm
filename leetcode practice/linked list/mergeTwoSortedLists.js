var mergeTwoLists = function (node1, node2) {
    let mergedHead = new ListNode(0);
    let nodeMerge = mergedHead;

    while (node1 && node2) {
        if (node1.val <= node2.val) {
            nodeMerge.next = node1;
            node1 = node1.next;
        } else {
            nodeMerge.next = node2;
            node2 = node2.next;
        }

        nodeMerge = nodeMerge.next;
    }

    if (!node1) {
        nodeMerge.next = node2;
    }

    if (!node2) {
        nodeMerge.next = node1;
    }

    return mergedHead.next;
}