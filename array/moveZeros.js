/*
移动数组中的元素0
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
切记不要边遍历数组边修改数组长度，如：splice，push，pop等，可能会导致索引溢出
*/

function moveZeros(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === 0) {
			// 出栈
			arr.splice(i, 1)
			arr.push(0)
		}
	}
	return arr
}

// 方法一，双指针
// 

const a =  [0,1,0,3,12]
console.log(moveZeros(a))