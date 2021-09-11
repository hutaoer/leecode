// 实现Math.pow()功能，题目没有强调 pow 必须为整数


// 方法1，暴力解法，需要考虑pow为特殊值的情况，0，负值
function myPow(n, pow) {
	if(pow === 0) return 1
	if(pow >= 1) {
		let num = n
		while(pow > 1) {
			num *= n
			pow -= 1
		}
		return num
	}
	if(pow <= -1) {
		return 1 / myPow(n, 0 - pow)
	}
	return -1
}


// 官方解法
function myPow1(n, pow) {
	if(pow === 0) return 1;
	// 确认正负
	const base = pow > 0 ? n : 1 / n;
	let result = 1
	for(let i = 1; i <= Math.abs(n); i++) {
		result *= base
	}
	return result;
}

// 分治
// n为偶数 x ** n = (x ** (n / 2)) * (x ** (n / 2))
// n为奇数 x ** n = (x ** ((n - 1) / 2)) * (x ** ((n - 1) / 2)) * x
function myPow2(x, n) {
	if(n === 0) return 1;
	if(n === 1) return x;
	if(n === -1) return 1 / x;
	const base = n > 0 ? x : 1 / x;
	const half = parseInt(n / 2, 10);
	const result = myPow2(x, half);
	// n 为基数，额外乘一次底数
	if(n % 2) {
		return base * result * result;
	}
	return result * result;
}

// 通过位运算

const res1 = myPow(2,3)
const res2 = myPow2(2, 5)
console.log(res2)


