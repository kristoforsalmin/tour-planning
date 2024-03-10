export default function formatDateForMachines(date: Date) {
  return date
    .toISOString()
    .split('T')
    .shift() as string
}
