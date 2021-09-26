// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 方法1，时间复杂度 O(n)
function  singleNumberV1(arr) {
	const cache = {}
	const arrLen = arr.length;
	const target = undefined;
	for(let i = 0; i < arrLen; i++) {
		const k = arr[i]
		console.log(k)
		// if(cache.get(k)) con
		if(!cache[k]) {
			cache[k] = k
		} else {
			delete cache[k]
		} 
	}
	if(!Object.keys[0].length) return []
	return cache[Object.keys[0]]
}

// 方法2 先找出元素相等的元素，并放到一个数组中。最后找到数组长度为1的数组。
// 时间复杂度 O(n ** 2)，
// 空间复杂度 O(n)

function singleNumberV2(arr) {
	// 双循环
	const group = arr.map(num => {
		// 返回[1,1] [2,2],[3,3],[4]
		return arr.filter(v => v === num)
	})
	// 找出length 为1的数组，取其元素
	group.find(num => num.length === 1)[0]
}


// 方法3，利用异或运算
// 相同的数组，异或值为 0 。异或运算符可以将两个数字比较，由于有一个数只出现了一次，其他数皆出现了两次，类似乘法法
// 则无论先后顺序，最后相同的数都会异或成0，唯一出现的数与0异或就会得到其本身，该方法是最优解，直接通过比较的方式即可得到只出现一次的数字。

function singleNumberV3(arr) {
	// return arr.reduce((a, b) => a ^ b)
	return arr.reduce((accumulator, currentVal) => accumulator ^ currentVal)
}

const arr = [1,2,2,3,3,1,4]
console.log(singleNumberV3(arr))