export function hashFormatter(string: string, num = 5): string {
  const length = string.length
  return string.slice(0, num) + '...' + string.slice(length - num, length)
}
