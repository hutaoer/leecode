// 输出从 1 到 n 数字的字符串表示。
// 自写
function fizzBuzz(n) {
  const a = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      a[i] = 'FizzBuzz';
      continue;
    }
    if (i % 5 === 0) {
      a[i] = 'Buzz';
      continue;
    }
    if (i % 3 === 0) {
      a[i] = 'Fizz';
      continue;
    }
    a[i] = i;
  }
  return a;
}

console.log(fizzBuzz(15));

// 推荐答案
