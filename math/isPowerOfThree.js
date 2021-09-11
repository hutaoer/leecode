// 判断一个数是否为 3 的幂次方。比如 3 ** 2 = 9， 3 ** 3 = 27 则true

// 你能不使用循环或者递归来完成本题吗？

// 使用循环，不断的对3 取模，看能否整除。

// 分析
// 3 的幂，顾名思义，需要判断当前数字是否可以一直被 3 整除
// 特殊情况：如果 n === 1 ，即 3 的 0 次幂的情况，应输出 true


// 方法1 ，使用循环
function isPowerOfThreeV1(n) {
	if(n < 1) return false
	while(n > 1) {
		if(n % 3 !== 0) {
			return false
		} else {
			n = n / 3
		}
	}
	// n 初始值为1 或者循环后 n 值为1，则为true
	return true
}

// 方法2，使用递归

function isPowerOfThreeV2(n) {
	if(n === 1) return true
	if(n % 3 !== 0) {
		return false
	} 
	n = n / 3
	return isPowerOfThreeV2(n)
}


// 方法3，先找到范围内，以3为底的最大的对数。然后求 3 的最大次幂，最后判断该舒能否整除 提供的数字即可。
// 最大整数为 32 位整数范围
// const MAX = 2 ** 31 - 1;
// const MIN = -(2 ** 31);

function isPowerOfThreeV3(n) {
	const max = 2 ** 31 - 1;
	const maxPower3 = parseInt(Math.log(max) / Math.log(3))
	const maxValue = Math.pow(3, maxPower3);
	return (maxValue % n == 0)
}

const res = isPowerOfThreeV2(28)
console.log(res)