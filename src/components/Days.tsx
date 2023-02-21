import { addDays, eachDayOfInterval, startOfWeek } from 'date-fns'

export const days = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
]

export function daysAll() {
  const today = startOfWeek(new Date(), { weekStartsOn: 1 })
  const aWeekFromNow = addDays(today, 4)
  const thisWeek = eachDayOfInterval({
    start: today,
    end: aWeekFromNow,
  })
  return thisWeek
}
