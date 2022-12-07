interface LunarDate { 
  lunarMonth: 12,   //农历月份
  lunarDate: 17,    //农历日期
  isLeap: false,    //是否闰月
  solarTerm: null,  //节气，null代表没有
  lunarYear: '庚午年', //农历年份，年以正月初一开始
  zodiac: '马',     //生肖，生肖以正月初一开始
  dateStr: '腊月十七' //农历中文
}

declare module 'chinese-lunar-calendar' {
  export function getLunar(y: number, m:number, d: number): LunarDate
}