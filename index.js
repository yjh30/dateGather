const nowDate = new Date();
const cloneNowDate = new Date();

const fullYear = nowDate.getFullYear();
const month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
const date = nowDate.getDate();

const endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天

// 格式化日期 (2016-02-14)
function getFullDate(targetDate) {
    let D, y, m, d;
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

    return y + '-' + m + '-' + d;
}

// 一天的时间戳(毫秒为单位)
const timestampOfDay = 1000*60*60*24;

// 今天，昨天
const fullToday = getFullDate();
const fullYesterday = getFullDate(nowDate - timestampOfDay);

let nowDay = nowDate.getDay(); // getDay 方法返回0 表示星期天
nowDay = nowDay === 0 ? 7 : nowDay;

// 本周一，本周末(星期天)
// 注：在safari下（nowDate +- 0）不会转换为时间戳，这里在nowDate前加上运算符+，手动转换时间戳运算
const fullMonday = getFullDate( +nowDate - (nowDay-1)*timestampOfDay );
const fullSunday = getFullDate( +nowDate + (7-nowDay)*timestampOfDay );

// 月初，月末
const fullStartOfMonth = getFullDate( cloneNowDate.setDate(1) );
const fullEndOfMonth = getFullDate( cloneNowDate.setDate(endOfMonth) );

export default {
    fullToday,
    fullYesterday,
    fullMonday,
    fullSunday,
    fullStartOfMonth,
    fullEndOfMonth,
    getFullDate
};
