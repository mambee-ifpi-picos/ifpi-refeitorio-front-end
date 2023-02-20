import { useState, useEffect } from 'react'
import InputDish from './InputDish'
import style from '../styles/Home.module.css'
import DishItems from './DishItems'
// import Button from "./Button"

interface EditDisheProps {
  text?: unknown
  plate: { dish: string; day: string }
  children?: unknown
  plateChanged?: (plate: { dish: string; day: string }) => void
}

export default function EditDish(props: EditDisheProps) {
  const [snack, setSnack] = useState(props.plate?.dish)

  useEffect(() => {
    setSnack(props.plate?.dish)
    console.log('useEffect edit')
  }, [props.plate?.dish])

  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
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
                  Jantar
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
                  {DishItems()}
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn  btn-sm btn-outline-danger"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  // id="btnSave"
                  // onClick={() => {
                  //   props.plateChanged?.(new DishMenu(props.plate.day, snack))
                  // }}
                >
                  Alterar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal-2 */}

        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex={-1}
          data-bs-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className={`modal-header ${style.BgDanger}`}>
                <h1
                  className="modal-title fw-semibold text-dark fs-5"
                  id="exampleModalToggleLabel2"
                >
                  Atenção
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body fs-5">
                Deseja cancelar as Alterações?
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-warning"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Retorna
                </button>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
