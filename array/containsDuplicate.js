/*
给定一个整数数组，判断是否存在重复元素。
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回
false。
*/
function containsDuplicate(arr) {
	const map = {}
	for(let i = 0; i < arr.length; i++) {
		const current = arr[i]
		if(map[current]) {
			return true
		} else {
			map[current] = 1
		}
	}
	return false
}

const arr = [1,2,3]
const arr1 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(arr1))