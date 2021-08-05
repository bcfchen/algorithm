var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) { return null; }

    let pointerA = headA, pointerB = headB;
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}