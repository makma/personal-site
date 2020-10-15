export function dateInStringToLongMonthNumericYear(dateString) {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
  return formattedDate
}

export function dateInStringToLongMonthNumericDayNumericYear(dateString) {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return formattedDate
}
