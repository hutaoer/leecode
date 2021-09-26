/*
给定长度为 n 的整数数组 nums ，其中 n > 1，返回输出数组 output ，其中 output[i] 等于
nums 中除 nums[i] 之外其余各元素的乘积。
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
*/

// 有点不明白
function productExceptSelf(arr) {
	const len = arr.length;
	const result = []
	const leftProduct = [] // 左侧的乘积
	const RightProduct = [] // 右侧数
	leftProduct[0] = 1;
	rightProduct[len - 1] = 1;
	for(let i = 1; i < arr.length; i++) {
		leftProduct[i] = leftProduct[i - 1] * arr[i - 1] 
	}
} 