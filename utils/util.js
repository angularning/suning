var sub = function(val) {
  if (val.length == 0 || val == undefined) {
    return;
  }
  if (val.length > 10) {
    return val.substring(0, 10);
  } else {
    return val;
  }
}
var subWord = function(val) {
  if (val.length == 0 || val == undefined) {
    return;
  }
  if (val.length > 14) {
    return val.substring(0, 14) + '...';
  } else {
    return val;
  }
}
function add0(m){ return m < 10 ? '0' + m : m }
var timeFormat = function(timestamp) {
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
  var time = new Date(timestamp);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);
}
module.exports.timeFormat = timeFormat;
module.exports.subWord = subWord;
module.exports.sub = sub;