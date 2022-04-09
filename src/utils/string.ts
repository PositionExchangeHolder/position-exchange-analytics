export function hashFormatter(string: string, shortLink: boolean, num = 5): string {
  const length = string.length
  return shortLink 
    ? string.slice(0, num) + '...' + string.slice(length - num, length)
    : string
}
