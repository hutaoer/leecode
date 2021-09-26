// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 输入 [1,2,9]
// 返回 [1,3,0]


// 方法一：我们可以把数组转化成数字加一，然后再转成数组

function plusOneV1(arr) {
	return (parseInt(arr.join(''), 10) + 1).toString().split('')
}

// 官方，考虑最大数溢出情况
// BigInt 是 JavaScript 中的一个新的数字类型，可以用任意精度表示整数。使用 BigInt，即使超出 Number 的安全整数范围限制，也可以安全地存储和操作大整数。
// 要创建一个 BigInt，将 n 作为后缀添加到任何整数文字字面量。例如，123 变成 123n。全局 BigInt(number) 函数可以用来将 Number 转换成BigInt。

function plusOneV2(arr) {
	return (BigInt(arr.join('')) + 1n).toString().split('');
}


// 方法三，模拟进位加法

function plusOneV3(arr) {
	// 注意，遍历条件，i >= 0
	for(let i = arr.length - 1; i >= 0; i--) {
		arr[i]++
		console.log(arr[i])

		if(arr[i] !== 10) {
			return arr
		} else {
			arr[i] = 0
		}
	}
	// 如果能一直执行到最后的，每个数字都是9，需要补位
	arr.unshift(1)
	return arr
}

const arr = [9, 9]
// console.log(plusOneV1(arr))
// console.log(plusOneV2(arr))
console.log(plusOneV3(arr))