function selectionSort(arr) {
	let min, minIndex;
	const len = arr.length;
	for(let i = 0; i < len - 1; i++) {
		minIndex = i;
		for(let j = i + 1; j < len; j++) {
			if(arr[j] < arr[minIndex]) {
				// 保存最小数的索引
				minIndex = j
			}
		}
		min = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = min
	}
	return arr
}

const arr = [4,1,3,9,5,2,7,6,8]
console.log(selectionSort(arr))
