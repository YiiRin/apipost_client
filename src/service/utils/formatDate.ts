const addZeroIfShort = (num: number) => {
  return num >= 0 && num < 10 ? `0${num}` : `${num}`
}
/**
 * 格式化日期
 * @param date
 */
export const formatDate = (date: string | Date) => {
  let iDate: Date
  if (typeof date === 'string') {
    iDate = new Date(date)
  } else {
    iDate = date
  }
  const year = iDate.getFullYear()
  const month = iDate.getMonth() + 1
  const day = iDate.getDate()
  const hour = iDate.getHours()
  const minute = iDate.getMinutes()
  const second = iDate.getSeconds()
  return `${year}-${addZeroIfShort(month)}-${addZeroIfShort(
    day
  )} ${addZeroIfShort(hour)}:${addZeroIfShort(minute)}:${addZeroIfShort(
    second
  )}`
}
