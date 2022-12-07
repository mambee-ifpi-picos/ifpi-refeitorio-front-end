import DishMenu from '../core/DishMenu'
import { useState, useEffect } from 'react'
import InputDish from './InputDish'
import style from '../styles/Home.module.css'
// import Button from "./Button"

interface EditDisheProps {
  text?: unknown
  plate: DishMenu
  children?: unknown
  plateChanged?: (plate: DishMenu) => void
}

export default function EditDish(props: EditDisheProps) {
  const [snack, setSnack] = useState(props.plate?.dish)

  useEffect(() => {
    setSnack(props.plate?.dish)
  }, [props.plate?.dish])

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLunch"
        tabIndex={-1}
        aria-labelledby="exampleModalLabelLunch"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className={`modal-header ${style.BG}`}>
              <h1
                className="modal-title fw-semibold text-dark fs-5"
                id="exampleModalLabelLunch"
              >
                Almoço
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
                    text={props.plate?.day}
                    value={snack}
                    valueChanged={setSnack}
                    onlyReading={false}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer  d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                // id="btnSave"
                onClick={() =>
                  props.plateChanged?.(new DishMenu(props.plate.day, snack))
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
