// 请判断一个链表是否为回文链表。
// 进阶： 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？


// 方法一，字符串拼接比较
// 思考：是不是可以先把正向字符串得到后，再把它反转进行比较？？
function isPalindrome(head) {
	let positiveStr = '';
	let reverseStr = '';
	while(head) {
		const nodeVal = head.val;
		// 正向拼接
		positiveStr += nodeVal;
		// 反向拼接
		reverseStr = nodeVal + reverseStr;
		// next 节点
		head = head.next;
	}
	// 比较两个字符串是否相等
	return positiveStr === reverseStr
}