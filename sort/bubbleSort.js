// function bubbleSort(arr) {
// 	const len = arr.length;
// 	let tmp
// 	for(let i = 0; i < len - 1; i++) {
// 		for(let j = i + 1; j < len; j++) {
// 			if(arr[j] > arr[j]) {
// 				// [arr[j], arr[i]] = [arr[i], arr[j]]
// 				tmp = arr[i]
// 				arr[i] = arr[j]
// 				arr[j] = tmp
// 			}
// 		}
// 	}
// 	return arr
// }

function bubbleSortV2(arr) {
	const len = arr.length;
	let tmp
	for(let i = 0; i < len - 1; i++) {
		for(let j = 0; j < len - 1 - i; j++) {
			if(arr[j] > arr[j + 1]) {
				// [arr[j], arr[i]] = [arr[i], arr[j]]
				tmp = arr[j + 1]
				arr[j + 1] = arr[j]
				arr[j] = tmp
			}
		}
	}
	return arr
}

const arr = [4,1,3,9,5,2,7,6]
console.log(bubbleSort(arr))
console.log(bubbleSortV2(arr))