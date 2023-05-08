import { addDays, format, startOfWeek, subDays } from 'date-fns'

export default function initialAndFinalDaysOfWeek({
  desiredWeek,
}: {
  desiredWeek: number
}) {
  let initialDay: string | Date
  let finalDay: string | Date
  if (desiredWeek > 0) {
    initialDay = startOfWeek(addDays(new Date(), desiredWeek * 7), {
      weekStartsOn: 1,
    })
  } else if (desiredWeek < 0) {
    initialDay = startOfWeek(subDays(new Date(), desiredWeek * 7), {
      weekStartsOn: 1,
    })
  } else {
    initialDay = startOfWeek(new Date(), { weekStartsOn: 1 })
  }
  finalDay = addDays(initialDay, 4)
  initialDay = format(initialDay, 'uuuu-MM-dd')
  finalDay = format(finalDay, 'uuuu-MM-dd')
  return [initialDay, finalDay]
}
