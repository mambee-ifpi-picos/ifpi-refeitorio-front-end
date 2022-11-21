import Menuday from './Menuday'
import MenuInput from './MenuInput'

interface AddDishProps {
  cancel: () => void
}
export default function AddDish(props: AddDishProps) {
  return (
    <div>
      <h3 className="text-start pb-4">Novo Cardápio</h3>
      <Menuday />
      <MenuInput />
      <div className="d-flex justify-content-around">
        <div className="col-auto">
          <button type="submit" className="btn btn-success mb-3">
            Salvar
          </button>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={props.cancel}
            className="btn btn-danger mb-3"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
