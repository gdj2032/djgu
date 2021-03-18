
//数组删除元素
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

//字符串去重
String.prototype.unique = function () {
  var obj = {},
      str = '',
      len = this.length;
  for (var i = 0; i < len; i++) {
      if (!obj[this[i]]) {
          str += this[i];
          obj[this[i]] = true;
      }
  }
  return str;
}
