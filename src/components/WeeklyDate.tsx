import { useGlobalContext } from '../store'
// import { WeekDays } from '../utils/dates'
import listDaysOfWeek from '../utils/dates/listDaysOfWeek'

export default function WeeklyDate() {
  const { desiredWeek } = useGlobalContext()
  return (
    <div className="py-2">
      <data className="text-muted">
        {listDaysOfWeek({ desiredWeek })[0].toLocaleDateString('pt-BR')}
        {' a '}
        {listDaysOfWeek({ desiredWeek })[4].toLocaleDateString('pt-BR')}
      </data>
    </div>
  )
}
