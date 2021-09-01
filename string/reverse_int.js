// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2 ** 31, 2 ** 31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * 时间复杂度O(n) 空间复杂度O(1)
 * @param {number} num
 * @returns {number} result
 */
function reverseFn(num) {
  if (typeof num !== 'number') return;
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  let result;
  // 判断正负值，如果是负数，则把符号取出
  if (num >= 0) {
    result = parseInt(reverseNum(num), 10);
    if (result > MAX) result = 0;
  } else {
    result = -parseInt(reverseNum(num), 10);
    if (result < MIN) result = 0;
  }

  // 将数字进行反转
  function reverseNum(n) {
    return n.toString().split('').reverse().join('');
  }

  return result;
}

/**
 * 另外一种解法
 * @param {*} x
 */
function reverseFn1(x) {
  if (typeof num !== 'number') return;
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  let int = Math.abs(x);
  let num = 0;
  while (int > 0) {
    num = (int % 10) + num * 10;
    int = Math.floor(int / 10);
  }
  // 123
  // num: 3 + 0 * 10 + , int: 12
  // num: 2 + 3 * 10, int: 1
  // num: 1 + 32 * 10, int: 0
  if (x >= 0) {
    if (num >= MAX) {
      return 0;
    } else {
      return num;
    }
  } else {
    num = num * -1;
    if (num < MIN) {
      return 0;
    } else {
      return num;
    }
  }
}
