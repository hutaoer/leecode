/*
两个数之和
给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那两个整数，
并返回他们的数组下标。
*/

// 方法一，暴力求解
// 遍历每个元素 x ，并查找是否存在一个值与 target - x 相等的目标元素。

function twoSumV1(arr, target) {
	const len = arr.length;
	for(let i = 0; i < len; i++) {
		for(let j = i + 1; j < len; j++) {
			if((arr[i] + arr[j]) === target) {
				return [i, j];
			}
		}
	}
}


// 方法二，利用 map，key 为数组的 value, 值为数组索引

function twoSumV2(arr, target) {
	const cache = {}
	arr.some((v, i) => {
		if(cache[target - v]) {
			res = [cache[target - v], i];
			return true;
		} else {
			cache[v] = i;
			return false;
		}
	})
	return res
}

// 方法三，利用 map，key 为数组的 value, 值为数组索引

function twoSumV3(arr, target) {
	const cache = {}
	for(let i = 0; i < arr.length; i++) {
		let tmp = arr[i];
		if(cache[target - tmp]) {
			return [cache[target - tmp], i]
		} else {
			cache[tmp] = i;
		}
	}
}




const arr = [2, 7, 11, 15, 4];
const target = 11
console.log(twoSumV1(arr, target))
console.log(twoSumV2(arr, target))
console.log(twoSumV3(arr, target))