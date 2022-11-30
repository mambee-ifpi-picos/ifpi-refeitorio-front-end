import DishMenu from '../core/DishMenu'
import { useState } from 'react'
import InputDish from './InputDish'
// import Button from "./Button"

interface EditDisheProps {
  text?: unknown
  plate: DishMenu
  children?: unknown
  plateChanged?: (plate: DishMenu) => void
}

export default function EditDish(props: EditDisheProps) {
  const [snack, setSnack] = useState(props.plate?.dish ?? '')

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.plate?.day}
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
                  <InputDish
                    text="Informe:"
                    value={snack}
                    valueChanged={setSnack}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer  d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                // id="btnSave"
                onClick={() =>
                  props.plateChanged?.(new DishMenu('', props.plate.dish))
                }
              >
                Alterar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
