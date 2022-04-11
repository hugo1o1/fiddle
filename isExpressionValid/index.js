//算法题：输入一个四则运算表达式字符串，仅包括 ( ) + - * / 和数字，请判断这个表达式是否有效

//样例输入：
//(1+2)* 3  True
//(1+(2-3/4))-5 True
//(1+)/2 False

const inBracket = /\(([^()]*)\)/
const expValid = /^\d[+-/*]\d$/

const isValid = (str) => {
  if (str.length == 0) return true
  // 有括号
  while (inBracket.test(str)) {
    if (expValid.test(RegExp.$1))
      str = str.replace(inBracket, '0')
    else break
  }
  if (expValid.test(str)) return true
  return false
}

const cases = ['3+(2+2)'];
console.log(cases.map(isValid))

// console.log(expValid.test('3+0'));
// console.log(expValid.test('3+0'));