import { format, formatDistanceToNow, fromUnixTime } from 'date-fns'

export const convertTimestampToDate = (timestamp: number | string): string => {
  return (
    format(
      fromUnixTime(+timestamp),
      'dd-MM-yyyy hh:mm a'
    )
  )
}

export const prefixDate = (time: number) => {
  if (time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

export const getLastSeen = (timestamp: number | string): string => {
  return formatDistanceToNow(
    new Date(Number(timestamp) * 1000),
    { addSuffix: true }
  )
}
