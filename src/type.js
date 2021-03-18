/**
 *  输入一个值，返回其数据类型
 *
 * @param {*} value
 * @returns
 */
export function objType(value) {
  return Object.prototype.toString.call(value)
}


/**
 * 数组去重 new Set()方法
 *
 * @param {any[]} arr
 * @returns
 */
export function uniqueSet(arr) {
  return [...new Set(arr)]
}

/**
 * 数组去重 filter方法
 *
 * @param {any[]} arr
 * @returns
 */
export function uniqueFilter(arr) {
  var obj = {};
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  })
}

/**
 * 数组去重 indexOf方法
 *
 * @param {any[]} arr
 * @returns
 */
export function uniqueIndexOf(arr) {
  var result = [];
  arr.forEach(ele => {
    if (result.indexOf(ele) == -1) {
      result.push(ele)
    }
  })
  return result;
}


/**
 * 去除连续的字符串
 *
 * @export
 * @param {string} str
 * @returns
 */
export function removeContinuousStr(str) {
  return str.replace(/(\w)\1+/g, '$1')
}
