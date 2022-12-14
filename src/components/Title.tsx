import { daysAll } from './TableLunch'

interface TitleProps {
  className?: string
  subTitle: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-center mb-3 border-bottom ">
      <h2 className="text-uppercase ">{props.subTitle}</h2>
      <data className="text-muted">
        {daysAll()[0].toLocaleDateString('pt-BR')}
        {' a '}
        {daysAll()[4].toLocaleDateString('pt-BR')}
      </data>
    </div>
  )
}
