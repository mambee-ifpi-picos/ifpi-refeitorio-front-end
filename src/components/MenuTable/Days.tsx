import { useGlobalContext } from '../../store'
import listDaysOfWeek from '../../utils/dates/listDaysOfWeek'

export default function Days({ desiredDay }: { desiredDay: number }) {
  const { desiredWeek, listNameDays } = useGlobalContext()
  const listDays = listDaysOfWeek({ desiredWeek })

  return (
    <>
      <p className="m-0">{listNameDays[desiredDay]}</p>
      <p className="m-0">{listDays[desiredDay].toLocaleDateString('pt-BR')}</p>
    </>
  )
}
