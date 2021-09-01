// 判断是否是一个有效的异位词。字母异位词指字母相同，但排列不同的字符串。

/**
 * 先排序，然后再分别进行对比
 * @param {*} s
 * @param {*} t
 */
function is_valid_anagram(s, t) {
  if (s.length !== t.length) return false;
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  let res = true;
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== t[index]) {
      res = false;
      break;
    }
  }
  return res;
}

function is_valid_anagram_v2(s, t) {
  if (s.length !== t.length) return false;
  const hash = {};
  for (const item of s) {
    if (hash[item]) {
      hash[item] = hash[item] + 1;
    } else {
      hash[item] = 1;
    }
  }
  for (const item of t) {
    if (hash[item]) {
      hash[item] = hash[item] - 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(is_valid_anagram_v2('abcda', 'cdaba'));
