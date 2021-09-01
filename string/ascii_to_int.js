// 字符串转整型数

// 通过正则匹配
function ascii_to_int(s) {
  // 去除空格
  s = s.trim();
  const reg = /^(-|\+)?\d+/;
  const matchRes = s.match(reg);
  if (matchRes) {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);
    const result = parseInt(matchRes[0], 10);
    if (result > MAX) {
      return MAX;
    }
    if (result < MIN) {
      return MIN;
    }
    return result;
  }
}
