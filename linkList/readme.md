# 链表

* 由于链表是非连续的，想要访问第 i 个元素就没数组那么方便了，需要根据指针一个结点一个结点地依次遍历，直到找到相应的结点。
* 数组在插入或删除元素时，为了保证数据的连续性，需要对原有的数据进行挪动。然而链表在插入或删除时，不要挪动原来的数据，因为链表的数据本身就是非连续的空间，因此在链表中插入、删除数据是非常快的。
* 注意情况：
  - 如果链表为空，代码会不会报错？
  - 如果只有一个元素，是否会抛异常？
  - 两个元素呢？
  - 在头部和尾部插入或删除，代码是否还可以正常工作？