import { useState, useEffect } from 'react'
import InputDish from './InputDish'
import style from '../styles/Home.module.css'
import DishItems from './DishItems'
// import Button from "./Button"

interface EditDisheProps {
  text?: unknown
  plate: { dish: string; day: string; meal: string; id: number }
  children?: unknown
  plateChanged?: (
    plate: { dish: string; day: string; meal: string; id: number },
    snack: string
  ) => void
}

export default function EditDish(props: EditDisheProps) {
  const [snack, setSnack] = useState(props.plate?.dish)

  useEffect(() => {
    setSnack(props.plate?.dish)
  }, [props.plate?.dish])

  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="exampleModalToggleLunch"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabelLunch"
          tabIndex={-1}
          data-bs-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className={`modal-header ${style.BG}`}>
                <h4
                  className="modal-title fw-semibold text-dark "
                  id="exampleModalToggleLabel"
                >
                  {props.plate.meal == 'almoço' ? 'Almoço' : 'Jantar'}
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3 h5">
                    <InputDish
                      text={props.plate?.day}
                      value={snack}
                      valueChanged={setSnack}
                      onlyReading={false}
                    />
                  </div>
                  <DishItems loading={true} />
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-outline-danger"
                  data-bs-target="#exampleModalToggle2Lunch"
                  data-bs-toggle="modal"
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  // id="btnSave"
                  onClick={() => {
                    props.plateChanged?.(props.plate, snack)
                  }}
                >
                  Alterar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
