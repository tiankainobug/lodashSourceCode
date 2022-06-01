import isError from './isError.js'

/**
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */

// 接收两个参数，第一个为回调函数，第二个为回调函数的参数
// 第二个参数 ...args 的写法叫做扩展运算符， ...args 就代表了所有传递过来的参数
// args为一个参数数组，里面顺序存放了每个参数。
function attempt(func, ...args) {
  try {
    return func(...args)
  } catch (e) {
    return isError(e) ? e : new Error(e)
  }
}

export default attempt
