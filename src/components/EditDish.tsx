import DishMenu from '../core/DishMenu'
import { useState } from 'react'
import InputDish from './InputDish'

interface EditDisheProps {
  dish: DishMenu
  children?: unknown
  plateChanged?: (dish: DishMenu) => void
}

export default function EditDish(props: EditDisheProps) {
  const Id = props.dish?.dish
  const [dish, setDishe] = useState(props.dish.dish ?? '')

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        // data-bs-whatever={props.dish[1].dish}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.dish.day}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <InputDish value={dish} valueChanged={setDishe} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                id="btnSave"
                onClick={() =>
                  props.plateChanged?.(new DishMenu(props.dish.day, dish))
                }
              >
                {Id ? 'Alterar' : 'Salvar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
