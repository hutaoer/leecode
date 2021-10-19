
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/submissions/
// 碰到大数的时候，没法计算，丢失精度。

// 自己的思路，否掉
function addToArrayForm(num, k) {
	const s = (+(num.join(''))+k).toString();
	console.log(s)
    const r = []
    for(let i of s) {
        r.push(+i)
    }
    return r
}

// 官方思路一，逐位相加
// 考虑两种场景，数字长度大于等于 k 的位数；数组长度小于 k 的位数。

function addToArrayFormV1(num, k) {
	const res = []

	const n = num.length;

	for(let i = n - 1; i >= 0; i--) {
		let sum = num[i] + k % 10;
		k = Math.floor(k / 10);
		if(sum >= 10) {
			k++;
			sum -= 10
		}
		res.push(sum)
	}
	console.log(res)
	console.log(k)
	// 数字长度大于数组长度的时候
	for (; k > 0; k = Math.floor(k / 10)) {
        res.push(k % 10);
    }
    res.reverse()
    return res;
}

// 官方思路二
function addToArrayFormV2(num, k) {
	const res = []
	const n = num.length;
	for(let i = n - 1; i >=0 || k > 0 ;i--, k = Math.floor(k / 10)) {
		if(i >= 0) {
			k += num[i]
		}
		res.push(k % 10);
	}
	res.reverse()
	return res;
}

// const num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
const num = [1,2,6]
const k = 5166

const s = addToArrayFormV1(num, k)
console.log(s)