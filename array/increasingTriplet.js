// 给定一个未排序的数组，找到一个长度为3的递增序列。
// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

// 方法一，
// 思路：使用 one 和 two 两个数。保证 one 小于 two，若遍历到一个数大于 two，则满足3个数递增。返回true
function increasingTriplet(arr) {
	if(arr.length < 3) return false;
	let one = arr[0];
	let two;
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < one) {
			one = arr[i]
		} else if(arr[i] < two) {
			two = arr[i]
		} else {
			return true
		}
	}
	return false;	
}


// 方法二
// 先找到最小的两个数，small 和 big，然后数组中如果还存在比 small和big大的数，那么就复合要求。
function increasingTripletV2(arr) {
	let small = Number.MAX_SAFE_INTEGER;
	let big = Number.MAX_SAFE_INTEGER;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] <= small) {
			small = arr[i]
		} else if(arr[i] <= big) {
			big = arr[i]
		} else {
			return true
		}
	}
	return false
}