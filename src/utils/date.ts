export const convertTimesTampToDate = (timestamp: number | string) => {
  const date = new Date(+timestamp)
  return {
    year: date.getFullYear(),
    month: prefixDate(date.getMonth() + 1),
    date: prefixDate(date.getDate()),
  }
}

export const prefixDate = (time: number) => {
  if (time < 10) {
    return `0${time}`
  } else {
    return time
  }
}
