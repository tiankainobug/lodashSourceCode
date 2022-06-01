import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values.
 */

// 参数operator
// 为一个回调函数，它是从add中传递过来的，接收两个参数，返回二者的加和。
function createMathOperation(operator, defaultValue) {
  // 这里的两个参数其实是调用add的时候传过来的
  // 假设调用_.add(2,3) 那么2，3就是value和other
  // 因为这个回调函数本质就是add
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    if (value !== undefined && other === undefined) {
      return value
    }
    if (other !== undefined && value === undefined) {
      return other
    }
    if (typeof value === 'string' || typeof other === 'string') {
      value = baseToString(value)
      other = baseToString(other)
    }
    else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    return operator(value, other)
  }
}

export default createMathOperation
