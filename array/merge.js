/*
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

https://leetcode-cn.com/problems/merge-sorted-array/

*/


function merge(nums1, nums2) {
	let n = nums2.length;
	while(n > 0) {
		const tmp = nums2.shift();
		for(let i = 0; i < nums1.length; i++) {
			if(tmp >= nums1[i]) {
				nums1.splice(i, 0, tmp)
			} else {
				nums1.unshift(tmp);
			}
		}

		n--;
	}
	return nums1;
}

const nums1 = [1,2,3,0,0,0]
const nums2 = [4,5,6]

const res = merge(nums1, nums2)
console.log(res)

// 官方解法一
// 将数组2放入数组1的尾部，然后进行排序

function mergeV1(nums1, m, nums2, n) {
	nums1.splice(m, nums1.length - n, ...nums2);
	nums1.sort((a,b) => a - b);
}


