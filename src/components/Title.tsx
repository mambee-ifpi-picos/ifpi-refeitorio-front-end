interface TitleProps {
  className?: string
  subTitle: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-center mb-3 border-bottom ">
      <h2 className="text-uppercase ">{props.subTitle}</h2>
      <data className="text-muted">01/12/2022 a 05/12/2022</data>
    </div>
  )
}
