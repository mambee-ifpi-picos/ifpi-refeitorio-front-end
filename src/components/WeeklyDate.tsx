import { daysAll } from './Days'

export default function WeeklyDate() {
  return (
    <div className="py-2">
      <data className="text-muted">
        {daysAll()[0].toLocaleDateString('pt-BR')}
        {' a '}
        {daysAll()[4].toLocaleDateString('pt-BR')}
      </data>
    </div>
  )
}
