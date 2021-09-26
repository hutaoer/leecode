// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数
// 组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// function removeDuplicate(arr) {
// 	arr.reduce((a, current, idx) => {
// 		console.log(a, current)
// 		if(a === current) {
// 			// console.log(idx)
// 			console.log(arr.splice(idx, 1))
// 			return current
// 		} else {
// 			return current
// 		}
// 	})
// 	return arr
// }

function removeDuplicateV2(arr) {
	if(arr.length === 1) return 1
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] === arr[i + 1]) {
			arr.splice(i, 1)
			i--;
		} else {
			continue;
		}
	}
	return arr.length;
}

// 不是很好懂
function removeDuplicateV1(arr) {
	let count = 0
	for(let i = 1; i < arr.length; i++) {
		if(arr[count] !== arr[i]) {
			arr[count + 1] = arr[i]
			count++
		}
	}
	console.log(arr)
}

let arr = [1,1,2,2,3]
let arr1 = [1,1,2]
let arr2= [0,0,1,1,1,2,2,3,3,4]


console.log(removeDuplicateV1(arr2))
