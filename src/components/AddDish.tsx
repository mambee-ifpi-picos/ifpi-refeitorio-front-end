import DishMenu from '../core/DishMenu'
import Menuday from './Menuday'
import MenuInput from './MenuInput'
import Title from './Title'
import { useState } from 'react'

interface AddDishProps {
  cancel: () => void
  dish?: DishMenu
}
export default function AddDish(props: AddDishProps) {
  const [menuInput, setMenuInput] = useState(props.dish?.dish || '')

  return (
    <div>
      <Title subTitle="Novo Cardápio" />
      <Menuday
        text="Dia"
        // value={menuDay}
        // onChance={setMenuDay}
      />
      <MenuInput value={menuInput} text="Descrição" onChance={setMenuInput} />
      <div className="d-flex justify-content-around">
        <div className="col-auto">
          <button type="submit" className="btn btn-success mb-3">
            {props.dish ? 'Alterar' : 'Salvar'}
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
