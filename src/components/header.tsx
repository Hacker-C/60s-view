import { getLunar } from 'chinese-lunar-calendar'

type Nums = 0 | 1 | 2 | 3 | 4 | 5 | 6
const getWeekDay = (n: Nums) => {
  return new Map<number, string>()
    .set(0, '日')
    .set(1, '一')
    .set(2, '二')
    .set(3, '三')
    .set(4, '四')
    .set(5, '五')
    .set(6, '六')
    .get(n)
}

function Header() {
  const D = new Date()
  const year = D.getFullYear()
  const month = D.getMonth() + 1
  const date = D.getDate()
  const day = D.getDay() as Nums
  const lunar = getLunar(year, month, date)
  return (
    <header font="song bold" text="center white">
      <h1 text-5xl py-3>星期{getWeekDay(day)}</h1>
      <p text-lg>{`${year}年${month}月${date}日`.split('').join(' ')}</p>
      <div text-lg>
        <span>周 {getWeekDay(day)}</span>
        <span ml-8>{`农历${lunar.dateStr}`.split('').join(' ')}</span>
      </div>
    </header>
  )
}

export default Header