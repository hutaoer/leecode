/*
给定一个包含 n 个整数的数组 nums ，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
*/

// 方案一，三层循环遍历
function threeSum(nums) {
	const res = []
	const uniqueMap = {}
	// 排序一发
	nums.sort((a, b) => a - b);
	for(let i = 0; i < nums.length - 2; i++) {
		// 注意 j = i + 1
		for(let j = i + 1; j < nums.length - 1; j++) {
			// 注意 k = j + 1
			for(let k = j + 1; k < nums.length; k++) {
				if(nums[i] + nums[j] + nums[k] === 0) {
					const item = [nums[i], nums[j], nums[k]];
					const uniqueKey = item.join(',');
					if(!uniqueMap[uniqueKey]) {
						uniqueMap[uniqueKey] = 1;
						res.push(uniqueKey)
					}
				}
			}
		}
	}
	return res;
}

const  nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))