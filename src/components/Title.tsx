interface TitleProps {
  className?: string
  children: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-center pb-2 mb-3 d-flex flex-column align-items-center border-bottom">
      <h1>{props.children}</h1>
    </div>
  )
}
