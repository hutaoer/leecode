// 两个数相除, 要求不使用乘法、除法和 mod 运算符。
// 被除数和除数均为 32 位有符号整数。 除数不为 0。 假设我们的环境只能存储 32 位有符号整数，
// 其数值范围是 [−2 ** 31, 2 ** 31 − 1]。除数不为 0。

// 方法1 

// XOR 由符号（^）, 不同符号数运算后为 0，相同符号数运算后为 1
function divide(dividend, divisor) {
	const MIN =  -2147483648
	const MAX = 2 ** 31 - 1;

	// 判断结果为正，还是负
	const positive = (dividend ^ divisor) >= 0;

	// 取绝对数，干掉符号
	let d = Math.abs(dividend)
	const b = Math.abs(divisor)


	let res = 0
	while(d >= b) {
		let tmp = b;
		let p = 1;
		// tmp * 2
		// 输入 100 4

		while((d >= (tmp * 2)) && tmp < 1073741823) {
			console.log('tmp:',tmp)
			// 第一轮 100 >= (4 * 2); tmp = (4 * (2 ** 1)); p = 
			// 第二轮 100 >= (4 * 2 ** 2); tmp = 4 * (2 ** 2); p = 4
			// 第三轮 100 < (4 * 2 ** 3) ; tmp = 4 * (2 ** 3); p = 8
			tmp <<= 1;
			p <<= 1;
			console.log('in while p:', p)
		}
		// 一轮计算完成，更新被除数
		d -= tmp;
		// 将第一轮的结果添加到 res
		res += p;
	}

}

// 方法2 
// 任何一个数都可以表示为以2的幂为底的一组基的线性组合

function divideV2(dividend, divisor) {
	const MIN =  -2147483648
	const MAX = 2 ** 31 - 1;

	// 判断结果为正，还是负
	const positive = (dividend ^ divisor) >= 0;

	// 取绝对数，干掉符号
	let t = Math.abs(dividend)
	const d = Math.abs(divisor)

	let res = 0;
	for(let i = 31; i >= 0; i--) {
		// >> 相当于除法 t / (2 ** i)
		if(Math.abs(t >> i) >= d) {
			// 保存本次的个数
			res += Math.abs(1 << i);
			// 减去 （除数 * (2 ** i) ，作为剩下的被除数
			t -= Math.abs(d << i);
		}
	}

	if(positive) {
		return res > MAX ? MAX : res;
	} else {
		return res < MIN ? MIN : res;
	}
}

const res = divide(16, 5)
// const res1 = divideV2(100, 4)
console.log(res)
// console.log(res1)


