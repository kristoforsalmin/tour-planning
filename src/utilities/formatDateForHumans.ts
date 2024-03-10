export default function formatDateForHumans(date: Date) {
  const formatter = new Intl.DateTimeFormat(document.documentElement.lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return formatter.format(date)
}
