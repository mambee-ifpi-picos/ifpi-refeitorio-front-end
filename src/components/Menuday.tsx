// interface MenudayProps {
//   text: string
//   value?: string

// }
export default function Menuday() {
  return (
    <div className="mb-3">
      <div className="col-auto">
        <label className="d-flex " htmlFor="autoSizingSelect">
          Dia
        </label>
        <select className="form-select" id="autoSizingSelect">
          <option selected>Escolha...</option>
          <option value="1">Segunda-Feira</option>
          <option value="2">Terça-Feira</option>
          <option value="3">Quarta-Feira</option>
          <option value="4">Quinta-Feira</option>
          <option value="5">Sexta-Feira</option>
        </select>
      </div>
    </div>
  )
}
