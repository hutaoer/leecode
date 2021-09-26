// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 方法一，自己实现，暴力解法
function lengthOfLongestSubstring(str) {
	const strArr = []
	let tmpStr = ''
	if(str.length == 1) return str;
	for(let i = 0; i < str.length; i++) {
		for(let j = i; j < str.length; j++) {
			console.log(j)
			if(tmpStr.indexOf(str[j]) == -1) {
				tmpStr += str[j]
			} else {
				strArr.push(tmpStr)
				tmpStr = ''
				break;
			}

		}
	}
}

// 方法二
// 将不重复的字符存入数组中，如果碰到重复字符，则不断的执行 list.shift，直到不再重复为止。每次将list的最大长度进行比较后，保存下来。

function lengthOfLongestSubstringV2(str) {
	let max = 0;
	const list = []
	const strLen = str.length;
	for(let i = 0; i < strLen; i++) {
		const tmpChar = str[i]
		if(list.indexOf(tmpChar) === -1) {
			list.push(tmpChar)
		} else {
			do {
				list.shift()
			} while(list.indexOf(tmpChar) !== -1)
			list.push(tmpChar)
		}
		max = Math.max(max, list.length)
	}
	return max
}

const s =  "abcabcbb";
const s1 =  "bb";

// lengthOfLongestSubstring(s)
// lengthOfLongestSubstring(s1)
console.log(lengthOfLongestSubstringV2(s))