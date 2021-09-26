// 考虑特殊情况，所有元素都是一样的


// 方法1，暴力法
var findMin = function(nums) {
	const len = nums.length;
	if(len === 1) return nums[0]
	if(nums[0] < nums[len - 1]) return nums[0]
	// 数据预处理，去掉首位元素相同的情况
	// let flag = true
	for(let i = 0; i < len - 1; i++) {
		if(nums[i] > nums[i + 1]) {
			// flag = true
			return nums[i + 1]
		}
	}
	// 最后一种意外情况，全部为相同数字的数组
	return nums[0]
	// console.log(flag)
};

// 方法2，二分查找，顺序存储，元素有序

// const arr = [4,5,6,7,0,1,4];
// const arr1 = [0,1,4,4,5,6,7];
// const arr2 = [2,2,2,0,1]
// const arr3 = [1,2,2,1,1]
const arr4 = [1,1]
// console.log(findMin(arr))
// console.log(findMin(arr1))
// console.log(findMin(arr2))
// console.log(findMin(arr3))
console.log(findMin(arr4))