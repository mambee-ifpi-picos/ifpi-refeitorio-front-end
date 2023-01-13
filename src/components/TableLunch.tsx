import DishMenu from '../core/DishMenu'
import style from '../styles/Home.module.css'
import { addDays, eachDayOfInterval, startOfWeek } from 'date-fns'

interface TableLunchProps {
  plates: DishMenu[]
  title: string
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

export const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

export function daysAll() {
  const today = startOfWeek(new Date(), { weekStartsOn: 1 })
  const aWeekFromNow = addDays(today, 4)
  const thisWeek = eachDayOfInterval({
    start: today,
    end: aWeekFromNow,
  })
  return thisWeek
}

function renderdateDays() {
  return daysAll().map((day, i) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <>
        {days[i]}
        <br />
        {day.toLocaleDateString('pt-BR')}
      </>
    )
  })
}
// function chekboxHolidays() {
//   const CheckSwitch = () => {
//     const input = document.getElementById('flexSwitchCheckReverse') as HTMLInputElement
//     return input.checked
//   }
//   return CheckSwitch()
// }

function TableLunch(props: TableLunchProps) {
  function renderHeader() {
    return (
      <>
        <tr className={`${style.BG}  shadow-sm`}>
          <th scope="row" className="text-center" colSpan={6}>
            <span className="fs-4">{props.title}</span>
          </th>
        </tr>
        <tr className="bg-dark h6 text-wrap bg-gradient align-middle text-light shadow-sm">
          <th className="text-center" colSpan={1}>
            Dia
          </th>
          <th className="text-center" colSpan={4}>
            Prato
          </th>
          {/* {renderdateDays()} */}
          <th className="text-center" colSpan={1}>
            Ação
          </th>
        </tr>
      </>
    )
  }

  function renderData() {
    return props.plates?.map((dish, i) => {
      return (
        <>
          <tr key={dish.day} className="shadow border border-secondary ">
            <th
              scope="row"
              colSpan={1}
              className="fw-bold border border-dark text-center border-opacity-50"
            >
              {renderdateDays()[i]}
            </th>
            <td colSpan={4} className="text-center text-wrap">
              {dish.dish}
            </td>
            <td
              scope="col"
              colSpan={1}
              className="d-md-flex text-center py-2 justify-content-evenly align-items-center"
            >
              {renderActions(dish)}
            </td>
          </tr>
        </>
      )
    })
  }

  function renderActions(dish: DishMenu) {
    return (
      <>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalToggleLunch"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm border btn-success"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <div className="dropdown py-1">
          <button
            className="btn shadow-sm border dropdown-toggle btn-light btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-slash-circle h5"></i>
          </button>

          <ul className="dropdown-menu px-3">
            <li>
              <div className="form-check form-switch form-check-reverse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                />
                <label
                  className="form-check-label text-nowrap  text-start"
                  htmlFor="flexSwitchCheckReverse"
                >
                  Desativa Dia:
                </label>
              </div>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Vazio
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Feriado
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Facultativo
                </label>
              </div>
            </li>
            <li>
              <div className="form-check ">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Feriado Prolongado
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border ms-2 btn-sm"
        >
        </button> */}
      </>
    )
  }

  return (
    <div className="table-responsive-lg pb-4 rounded">
      <table className="table align-middle border overflow-hidden rounded-top caption-top shadow table-bordered text-start table-hover ">
        <thead>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  )
}

export default TableLunch
