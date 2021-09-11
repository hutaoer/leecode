
// 找到数字 n! 结果中，尾数有多少个0

// 方法1 找规律，其实就是找 n 这个数中有多少个因子 5，5 * 2 = 10。所以，只要有 因子5，尾数必定有 0
// 这样看，就变成了找 以 5 为底，计算其对数？
function trailingZeroesV1(n) {
	let count = 0
	for(let i = 1; i <= n; i++) {
		let num = i;
		if(num % 5 === 0) {
			while(num % 5 === 0 && num !== 0) {
				count += 1;
				num = parseInt(num / 5)
			}
		}
	}
	return count
}



// 方法2 ，找出5的因子个数
// 复杂度 log(n)
function trailingZeroesV2(n) {
	let count = 0
	while(n > 0) {
		n = parseInt(n / 5)
		count += n
	}
	// n        5  10  15   20    25  30   125
	// count    1   2   3    4     6   7    25 + 
	return count
}

const res1 = trailingZeroesV1(25)
const res2 = trailingZeroesV2(25)
console.log(res1,res2)
