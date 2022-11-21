interface MenuInputProps {
  text: string
  value: string
  onChance?: (value: string) => void
}
export default function MenuInput(props: MenuInputProps) {
  return (
    <div className="mb-3">
      <label className="d-flex form-label">{props.text}</label>
      <textarea
        onChange={(e) => props.onChance?.(e.target.value)}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={8}
      >
        {props.value}
      </textarea>
    </div>
  )
}
