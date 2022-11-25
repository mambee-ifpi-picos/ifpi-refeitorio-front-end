interface InputDishProps {
  value: string
  onlyReading?: boolean
  children?: unknown
  valueChanged?: (value: string) => void
}
export default function InputDish(props: InputDishProps) {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type="text"
        value={props.value?.toString() ?? ''}
        readOnly={props.onlyReading}
        onChange={(e) => props.valueChanged?.(e.target.value)}
      />
    </div>
  )
}

// id={props.dish[1].dish}
