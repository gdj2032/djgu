/**
 * 单例模式
 *
 * @export
 * @param {*} func
 * @returns
 */
export default function getSingle(func) {
  var result;
  return function () {
    if (!result) {
      result = new func(arguments);
    }
    return result;
  }
}
