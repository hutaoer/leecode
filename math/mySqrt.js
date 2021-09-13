// 求非负数整数的平方根，仅保留整数


// 方法1，不断与自己计算乘积，知道大于等于给出的数字。

const num = parseInt(process.argv[2],10) || 0
console.log('num', num)

function mySqrt(n) {
	let res = 0;
	let tmp = 0;
	// 0  2
	while(res <= n) {
		if(res == n) return tmp
		tmp += 1;
		res = tmp * tmp
	}
	return tmp - 1
}




// 官方，方法1思路

function mySqrtV1(n) {
	if(0 === n) return 0;
	for (var i = 1; i <= n; i++) {
		let res = i * i;
		if(res < n) {
			continue;
		} else if(res > n) {
			return i - 1;
		} else if(res == n) {
			return i;
		}
	}
}


// 官方，二分查找


const res = mySqrtV1(num)
console.log(res)