// 找到最大的公共前缀
// 先找两个，再找三个，直到最后一个

const arr = ['123', '1232342', '12'];
const arr1 = ['flower', 'flow', 'flight'];
function findCommPrefix(arr) {
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  return arr.reduce((a, b) => {
    let tmp = '';
    const len = a.length;
    for (let i = 0; i < len; i++) {
      if (a[i] === b[i]) {
        tmp += a[i];
      } else {
        break;
      }
    }
    return tmp;
  });
}

const res = findCommPrefix(arr);
const res1 = findCommPrefix(arr1);
console.log(res);
console.log(res1);
