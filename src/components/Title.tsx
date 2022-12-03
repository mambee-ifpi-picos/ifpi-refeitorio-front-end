interface TitleProps {
  className?: string
  subTitle: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-center pb-2 mb-3 d-flex flex-column align-items-center border-bottom">
      <h2>{props.subTitle}</h2>
    </div>
  )
}
