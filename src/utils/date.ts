export const convertTimesTampToDate = (timestamp: number) => {
  const date = new Date(timestamp)
  return {
    year: date.getFullYear(),
  }
}
