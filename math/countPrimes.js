// 计算 统计所有小于非负整数 n 的质数的数量。

// 质数定义：一个大于1的自然数，仅能被1和本身整除，又称为素数

// 方法1，暴力解
// 定义一个函数 isPrime 来判断是否质数，然后遍历 2 到 n


// 判断是否质数的方法1，从2开始，一直到小于其自身，依次判断能否被n整除即可，能够整除则不是质数，否则是质数。

function isPrimeV1(n) {
	if(n < 1) return false
	if(n >= 1 && n <= 3) return true
	for(let i = 2; i < n; i++) {
		if(n % i === 0) {
			return false
			// break
		}
	}
	return true
}

// 假如n是合数，必然存在非1的两个约数p1和p2，其中p1<=sqrt(n)，p2>=sqrt(n)。由此我们可以改进上述方法优化循环次数。如下：
function isPrimeV2(n) {
	if(n < 1) return false
	if(n >= 1 && n <= 3) return true
	const min = Math.floor(Math.sqrt(n))
	for(let i = 2; i <= min; i++) {
		if(n % i === 0) {
			return false
			// break
		}
	}
	return true
}

/*
我们继续分析，其实质数还有一个特点，就是它总是等于 6x-1 或者 6x+1，其中 x 是大于等于1的自然数。
如何论证这个结论呢，其实不难。首先 6x 肯定不是质数，因为它能被 6 整除；其次 6x+2 肯定也不是质数，因为它还能被2整除；依次类推，6x+3 肯定能被 3 整除；6x+4 肯定能被 2 整除。
那么，就只有 6x+1 和 6x+5 (即等同于6x-1) 可能是质数了。所以循环的步长可以设为 6，然后每次只判断 6 两侧的数即可。
*/

function isPrimeV3(n) {
	if(n < 1) return false
	if(n >= 1 && n <= 3) return true
	if(n % 6 === 0) return false
	if((n - 1) % 6 === 0 || (n + 1) % 6 === 0) {
		const min = Math.floor(Math.sqrt(n))
		for(let i = 2; i <= min; i++) {
			if(n % i === 0) {
				return false
				// break
			}
		}
		return true
	} else {
		return false
	}
}

// v3 版本改进
function isPrimeV4(num) {
    if (num <= 3) {
        return num > 1;
    }
    // 不在6的倍数两侧的一定不是质数
    if (num % 6 != 1 && num % 6 != 5) {
        return false;
    }
    const sqrt = Math.floor(Math.sqrt(num));

    // 6x-1 or 6x+1
    for (let i = 5; i <= sqrt; i += 6) {
    	console.log(num, `;i: ${i};`, `i + 2:${i + 2}`)
    	// 为什么有 n%(i+2)==0 这个判断？
        	// i + 1
        	// i + 2
        	// i + 3
        	// i + 4
        	// i + 5
        	// (5 + 6n) 中，只有 (5 + 6n) 或 (5 + 2 + 6n) 不是合数，所以这里要加 2
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

const arr = [611]
// const res1 = arr.map(x => isPrimeV1(x))
// const res2 = arr.map(x => isPrimeV2(x))
// const res3 = arr.map(x => isPrimeV3(x))
const res4 = arr.map(x => isPrimeV4(x))

// console.log(res1)
// console.log(res2)
// console.log(res3)
console.log(res4)