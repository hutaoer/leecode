/*
通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
*/

function insertionSort(arr) {
	const len = arr.length;
	let preIndex;
	let current;
	for(let i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i]; 
		while(preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}