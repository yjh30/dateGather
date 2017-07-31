var nowDate = new Date();
var cloneNowDate = new Date();

var fullYear = nowDate.getFullYear();
var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
var date = nowDate.getDate();

var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天

// 格式化日期 (2016-02-14)
function getFullDate(targetDate, accurateToSecond) {
    var D, y, m, d;
    if (targetDate) {
        D = new Date(targetDate);
        y = D.getFullYear();
        m = D.getMonth() + 1;
        d = D.getDate();
    } else {
        y = fullYear;
        m = month;
        d = date;
    }
    m = m > 9 ? m : '0' + m;
    d = d > 9 ? d : '0' + d;

    // 精确到秒
    if (accurateToSecond) {
        var dateObj = (D || nowDate);
        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();
        var seconds = dateObj.getSeconds();

        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;

        return `${y}-${m}-${d} ${hours}:${minutes}:${seconds}`;
    } else {
        return `${y}-${m}-${d}`;
    }
}

// 一天的时间戳(毫秒为单位)
var timestampOfDay = 1000*60*60*24;

// 今天，昨天
var fullToday = getFullDate();
var fullYesterday = getFullDate(nowDate - timestampOfDay);

var nowDay = nowDate.getDay(); // getDay 方法返回0 表示星期天
nowDay = nowDay === 0 ? 7 : nowDay;

// 本周一，本周末(星期天)
// 注：在safari下（nowDate +- 0）不会转换为时间戳，这里在nowDate前加上运算符+，手动转换时间戳运算
var fullMonday = getFullDate( +nowDate - (nowDay-1)*timestampOfDay );
var fullSunday = getFullDate( +nowDate + (7-nowDay)*timestampOfDay );

// 月初，月末
var fullStartOfMonth = getFullDate( cloneNowDate.setDate(1) );
var fullEndOfMonth = getFullDate( cloneNowDate.setDate(endOfMonth) );

module.exports = {
    fullToday,
    fullYesterday,
    fullMonday,
    fullSunday,
    fullStartOfMonth,
    fullEndOfMonth,
    getFullDate
};
