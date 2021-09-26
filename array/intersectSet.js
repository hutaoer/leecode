// 给定两个数组，计算数组交集。取两个数组的交集


// 方法一
function intersectSet(n1, n2) {
	const hashObject = {}
	for(let i = 0; i < n1.length; i++) {
		if(hashObject[n1[i]]) {
			hashObject[n1[i]]++
		} else {
			hashObject[n1[i]] = 1
		}
	}
	const result = []
	for(let i = 0; i < n2.length; i++) {
		if(hashObject[n2[i]]) {
			result.push(n2[i])
			hashObject[n2[i]]--
		}
	}
	return result
}

// 方法二，判断两个数组长短，取出短的进行遍历。如果长数组中包含短数组中的某个元素，则push到result，并删除该元素。

function intersectSetV2(n1, n2) {
	let longArr, shortArr;
	const result = []
	if(n1.length >= n2.length) {
		longArr = n1;
		shortArr = n2;
	} else {
		longArr = n2;
		shortArr = n1;
	}

	for(let i = 0; i < shortArr.length; i++) {
		const current = shortArr[i]
		const idx = longArr.indexOf(current)
		// 该元素在长数组中存在
		if(idx > -1) {
			result.push(current);
			longArr.splice(idx, 1)
		}
	}
	return result
}

// const nums1 = [1,2,2,1] 
// const nums2 = [2,2]

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]

console.log(intersectSet(nums1, nums2))
console.log(intersectSetV2(nums1, nums2))