// 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 分析：如果k等于数组的长度，相当于不做移动。否则，直接截取相应长度进行拼接。
// 而当 k 为数组长度的倍数时，实际相当于没有移动，所以实际需要循环操作的次数为 k % l。


// 方法1
// O(n)

function rotateV1(arr, k) {
	const arrLen = arr.length;
	if(k === arrLen) return arr;
	k = k % arrLen;
	const spliceIndex = arrLen - k
	return arr.splice(spliceIndex).concat(arr)
}

// 方法2，不断的把最后一个元素，填充到数组头，使用pop和unshift；循环k次
// 不许新开辟空间，O(log(n))

function rotateV2(arr, k) {
	const arrLen = arr.length;
	if(k === arrLen) return arr;
	k = k % arrLen;
	for(; k > 0; k--) {
		arr.unshift(arr.pop())
	}
	return arr
}

const arr = [1,2,3,4,5,6]
const res = rotateV2(arr, 2)
console.log(res)