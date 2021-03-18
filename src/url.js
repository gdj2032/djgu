/**
 * 获取url上的参数
 *
 * @export
 * @param {*} sUrl
 * @param {*} sKey
 * @returns
 */
export function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val;
    } else {
      var temp = result[key];
      result[key] = [].concat(temp, val);
    }
  })
  if (!sKey) {
    return result;
  } else {
    return result[sKey] || '';
  }
}
