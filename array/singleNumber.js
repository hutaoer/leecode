// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 方法1
function  singleNumberV1(arr) {
	const cache = {}
	const arrLen = arr.length;
	const target = undefined;
	for(let i = 0; i < arrLen; i++) {
		const k = arr[i]
		console.log(k)
		if(!cache[k]) {
			cache[k] = k
		} else {
			delete cache[k]
		} 
	}
	console.log(cache)
	return cache[Object.keys[0]]
}

// 方法2 利用两个相同的数做 位运算




const arr = [1,2,2,3,3,1]
console.log(singleNumberV1(arr))