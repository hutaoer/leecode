/*
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
*/


// 方法一，先对每个异位词排序，排序后的字符串作为key，相同的就放到一起。
function groupAnagrams(arr) {
	const obj = {}
	const result = []
	for(let i = 0; i < arr.length; i++) {
		// 计算每个元素的key值
		const unit = Array.from(arr[i]).sort().join('')
		if(!obj[unit]) {
			obj[unit] = []
		}
		obj[unit].push(arr[i])
	}
	for(const i in obj) {
		arr.push(obj[i])
	}
	return arr
}

// 方法二，确定key的方法不一样

function groupAnagramsV2(strs) {
	const obj = {}
	const arr = []
	for(let i = 0; i < strs.length; i++) {
		// 用来确定唯一的key值
		const unit = new Array(26).fill(0)
		for(let j = 0; j < strs[i].length; j++) {
			const index = strs[i].charCodeAt(j) - 97; // 'a' 对应97, index 为 0
			unit[index] += 1;
		}
		const newUnit = JSON.stringify(unit)
		if(!obj[newUnit]) {
			obj[newUnit] = []
		}
		obj[newUnit].push(strs[i])
	}
	for(let i in obj) {
		arr.push(obj[i])
	}
	console.log(obj)
	return arr
}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagramsV2(arr))