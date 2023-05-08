import { addDays, eachDayOfInterval, startOfWeek, subDays } from 'date-fns'

export default function listDaysOfWeek({
  desiredWeek,
}: {
  desiredWeek: number
}) {
  let today
  if (desiredWeek > 0) {
    today = startOfWeek(addDays(new Date(), desiredWeek * 7), {
      weekStartsOn: 1,
    })
  } else if (desiredWeek < 0) {
    today = startOfWeek(subDays(new Date(), Math.abs(desiredWeek) * 7), {
      weekStartsOn: 1,
    })
  } else {
    today = startOfWeek(new Date(), { weekStartsOn: 1 })
  }
  const aWeekFromNow = addDays(today, 4)
  const thisWeek = eachDayOfInterval({
    start: today,
    end: aWeekFromNow,
  })
  return thisWeek
}
