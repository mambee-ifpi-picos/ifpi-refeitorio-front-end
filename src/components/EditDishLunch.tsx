import DishMenu from '../core/DishMenu'
import { useState, useEffect } from 'react'
import InputDish from './InputDish'
import style from '../styles/Home.module.css'
import DishItems from './DishItems'
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

  // function selectingDays() {
  //   const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta']
  //   const daysSelected = days.filter((day) => {
  //     const input = document.getElementById(day) as HTMLInputElement
  //     return input.checked
  //   })
  //   return daysSelected
  // }

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
                  Almoço
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
                  {/* <div className="pb-3">
                    <h4 className="">Selecione o(s) Dia(s)</h4>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="segunda"
                      autoComplete="off"
                    />
                    <label
                      className="btn m-2 btn-outline-success"
                      htmlFor="segunda"
                    >
                      Segunda-feira
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="terca"
                      autoComplete="off"
                    />
                    <label
                      className="btn m-2 btn-outline-success"
                      htmlFor="terca"
                    >
                      Terça-feira
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="quarta"
                      autoComplete="off"
                    />
                    <label
                      className="btn m-2 btn-outline-success"
                      htmlFor="quarta"
                    >
                      Quarta-feira
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="quinta"
                      autoComplete="off"
                    />
                    <label
                      className="btn m-2 btn-outline-success"
                      htmlFor="quinta"
                    >
                      Quinta-feira
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="sexta"
                      autoComplete="off"
                    />
                    <label
                      className="btn m-2 btn-outline-success"
                      htmlFor="sexta"
                    >
                      Sexta-feira
                    </label>
                  </div> */}

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
                    // if (selectingDays().length === 0) {
                    //   alert('Selecione um dia')
                    // } else {
                    //   return

                    props.plateChanged?.(new DishMenu(props.plate.day, snack))
                  }}

                  // }
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
          id="exampleModalToggle2Lunch"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2Lunch"
          tabIndex={-1}
          data-bs-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ">
              <div className={`modal-header ${style.BgDanger}`}>
                <h1
                  className={`modal-title fw-semibold text-dark fs-5 `}
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
              <div className={`modal-body fs-5 fw-semibold`}>
                Deseja cancelar as Alterações?
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-warning"
                  data-bs-target="#exampleModalToggleLunch"
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
