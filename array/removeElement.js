/* 
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

*/
function removeElement(nums, val) {
	let j = nums.length - 1;
	let i = 0;
	while(i <= j) {
		if(nums[i] === val) {
			nums[i] = nums[j];
			j--;
		} else {
			i++;
		}
	}
	console.log(nums)
	return i;
	// for(; i <= j; i++) {
	// 	if(nums[i] === val) {
	// 		while(nums[i] === val) {
	// 			nums[i] = nums[j];
	// 			nums[j] = val + 1;
	// 			j--
	// 		}
	// 	}
	// }
	// return i;
}

// 官方解法一
var removeElementV1 = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    console.log(nums)
    return left;
};

// 官方解法二
var removeElementV2 = function(nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};

// removeElementV1([3,2,2,3], 3)
removeElementV2([3,2,2,3], 3)