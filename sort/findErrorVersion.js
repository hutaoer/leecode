/*
假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。 你可以通过调
用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来
查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
*/


// 方法一：暴力遍历
function findErrorVersion( isBadVersion ) {
	return function(n) {
		// 从第一个版本开始遍历，当 isBadVersion 结果为 true 时候返回 i
		for(let i = 1; i < n; i++) {
			if(isBadVersion(n)) {
				return i
			}
		}
		return n
	}
}


// 方法二：二分
function findErrorVersion( isBadVersion ) {
	return function(n) {
		let left = 1;
		let right = n;
		while(left <= right) {
			
		}
	}
}