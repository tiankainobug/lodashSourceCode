import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 * add(6, 4)
 * // => 10
 */

// createMathOperation返回的是一个函数，也就是说add是一个函数
// 当我们调用_.add(1,2)的时候，这里的两个参数其实是从返回函数中调用的。
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
