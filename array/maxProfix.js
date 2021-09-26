// 股票买卖最大利润
// 思路：当价格是递增的时候，在最低点买入，然后最高点卖出。再等待第二个最低点，直到结束。



function maxProfitV1(arr) {
	// 总利润
	let num = 0
	// 滑动窗口后一个下标
	let aftOff = arr.length - 1;
	// 滑动窗口前一个下标
	let offset = arr.length - 1;
	while(offset > 0) {
		if(arr[offset] > arr[offset - 1]) {
			offset -= 1;
		} else {
			num += arr[aftOff] - arr[offset];
			// 坐标更新
			aftOff = offset
			offset -= 1
		}
	}

	// 坐标走到第一天的逻辑处理
	// 这里需要推演一下
	if(aftOff !== offset) {
		num += arr[aftOff] - arr[offset]
	}
	return num
}

function maxProfitV2(arr) {
	let num = 0;
	// 注意数组不要越界
	for(let i = 0; i < arr.length - 1; i++) {
		const currentVal = arr[i]
		const nextVal = arr[i + 1]
		if(currentVal < nextVal) {
			num += nextVal - currentVal
		}
	}
	return num
}

const arr = [7,6,4,3,1]
const arr1 =  [7,1,5,3,6,4]
console.log(maxProfitV2((arr)))
console.log(maxProfitV2((arr1)))