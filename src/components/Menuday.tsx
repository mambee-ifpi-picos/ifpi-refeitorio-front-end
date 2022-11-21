interface MenudayProps {
  text: string
  value?: string
  onChance?: (value: string) => void
}
export default function Menuday(props: MenudayProps) {
  return (
    <div className="mb-3">
      <div className="col-auto">
        <label className="d-flex pb-1">{props.text}</label>
        <select
          className="form-select"
          id="autoSizingSelect"
          onChange={(e) => props.onChance?.(e.target.value)}
        >
          <option selected>Escolha...</option>
          <option value={props.value}>Segunda-Feira</option>
          <option value={props.value}>Terça-Feira</option>
          <option value={props.value}>Quarta-Feira</option>
          <option value={props.value}>Quinta-Feira</option>
          <option value={props.value}>Sexta-Feira</option>
        </select>
      </div>
    </div>
  )
}
