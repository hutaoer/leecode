function quickSort(arr) {
	const len = arr.length;
	if(len <= 1) return arr;

	const middleIndex = Math.floor(len / 2);
	const middle = arr.splice(middleIndex, 1)[0];
	const left = [];
	const right = [];
	arr.forEach(item => {
		if(item < middle) {
			left.push(item)
		} else {
			right.push(item)
		}
	})
	return [...quickSort(left), middle, ...quickSort(right)]
}

function qSort(arr) {
  if (arr.length <= 1) return arr
  const index = Math.floor(arr.length / 2)
  // const midVal = arr.splice(index, 1)[0]
  const midVal = arr[index]
  const left = [],
    right = []
  arr.forEach(item => {
    if (item < midVal) left.push(item)
    else right.push(item)
  })
  console.log('left', left)
  console.log('right', right)

  return [...qSort(left), ...qSort(right)]
}


const arr = [11,10,2,3,33,99,55,55,40,1,4,5,9]
const arr1 = [2,2]
// const arr1 = [11,10,2,3,33,99,55,55,40,1,4,5,9]
const res = quickSort(arr)
const res1 = qSort(arr1)
console.log(res)
console.log(res1)