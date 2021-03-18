
/**
 * 防抖
 *
 * @export
 * @param {*} handle
 * @param {*} delay
 * @returns
 */
 export function debounce(handle, delay) {
  var timer = null;
  return function () {
    var _self = this,
      _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args)
    }, delay)
  }
}

/**
 * 节流
 *
 * @export
 * @param {*} handler
 * @param {*} wait
 * @returns
 */
export function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
      var nowTime = new Date().getTime();
      if (nowTime - lastTime > wait) {
          handler.apply(this, arguments);
          lastTime = nowTime;
      }
  }
}
