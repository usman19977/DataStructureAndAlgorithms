function getIntersectionNode(list1, list2) {
    const set = new Set();
    while (list1.next || list2.next) {
      if (list1.next) {
        if (set.has(JSON.stringify({ val: list1.val, next: list1.next.val })))
          return list1;
        set.add(JSON.stringify({ val: list1.val, next: list1.next.val }));
        list1 = list1.next;
      }
      if (list2.next) {
        if (set.has(JSON.stringify({ val: list2.val, next: list2.next.val })))
          return list2;
        set.add(JSON.stringify({ val: list2.val, next: list2.next.val }));
        list2 = list2.next;
      }
    }
    return null;
  }