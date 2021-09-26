/*
给定三个整数，判断是一周中的星期几
输入为三个整数：day、month 和 year，分别表示日、月、年。
*/


// 方法一，直接计算
/*
1. 先算出 1970 年 12 月 31 日距今一共有多少天
2. 然后对得到的天数模 7 取余数，得到一个数字如 5 ，表示当前是星期五
3. 最后根据得到的数字输出英文的星期几
*/


// 方法二，库函数

function dayOfTheWeekV2(day, month, year) {
	const d = new Date(Date.parse(`${year}/${month}/${day}`))
	return d.getDay()
}