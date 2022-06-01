/**
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  let result
  // 如果传递过来的func不是函数，则抛出错误
  if (typeof func !== 'function') {
    // 抛出类型错误
    throw new TypeError('Expected a function')
  }
  // 返回一个function，通过扩展运算符将参数n、func传递过来
  return function(...args) {
    // --n 为先进行减法操作，然后再进行大于0的判断
    // 官网描述的情况为 调用次数不超过n次。 我认为是有问题的
    // 我们假设 n 为 1，那么根据官网的描述:超过n次不再调用，得到该方法的调用次数不超过1次，也就是可以调用1次。
    // 但是根据这里源码写的逻辑，n 为1的时候，先进行 -- 操作，得到 0，0不大于0，所以就走了下面的逻辑
    // 所以官网的描述应该是错误的，应该是调用的次数不能大于等于n次。
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
