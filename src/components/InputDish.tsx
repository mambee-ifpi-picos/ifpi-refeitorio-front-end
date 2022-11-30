interface InputDishProps {
  text?: string
  value: string
  onlyReading?: boolean
  children?: unknown
  valueChanged?: (value: string) => void
}
export default function InputDish(props: InputDishProps) {
  return (
    <div className="mb-3">
      <label className="d-flex fw-semibold col-form-label">{props.text}</label>
      <input
        className="form-control"
        type="text"
        value={props.value}
        readOnly={props.onlyReading}
        onChange={(e) => props.valueChanged?.(e.target.value)}
      />
    </div>
  )
}
