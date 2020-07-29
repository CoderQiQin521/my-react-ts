/**
 * 日期时间左边补零
 * @param num 可以是字符串和数字类型
 */
export function padZero(num: number | string): string {
  return +num < 10 ? '0' + num : num + ''
}

/**
 * 创建一个用户
 * @param name 姓名 字符串
 * @param age 年龄 number
 * @param sex 性别 0 或者 1
 * @param job 职业 字符串
 */
export function createUser(
  name: string,
  age: number,
  sex: 0 | 1,
  job: string
): object {
  return {}
}

// TODO:函数重载

// 泛型
function test(a: string): string {
  return '泛型'
}

function test2<R>(a: R): R {
  return a
}
console.log(test2<String>('阿瑟的'))
console.log(test('12312'))

function test3<T, U>(value: T, message: U): T {
  return value
}

console.log(test3('阿斯达斯大神', 54645))
