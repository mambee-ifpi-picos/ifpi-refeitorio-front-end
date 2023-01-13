import DishMenu from '../core/DishMenu'
import style from '../styles/Home.module.css'
import DisableDay from './DisableDay'
import { days, daysAll } from './TableLunch'

interface TableProps {
  plates: DishMenu[]
  title: string
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
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

function Table(props: TableProps) {
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
          <tr key={dish.day} className="shadow border  border-secondary ">
            <th
              scope="row"
              colSpan={1}
              className="fw-bold border border-dark  text-center border-opacity-50"
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
          data-bs-target="#exampleModalToggle"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm border btn-success"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        {DisableDay()}
        {/* <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border ms-3 btn-outline-danger btn-sm"
        >
          <i className="bi bi-trash3 h6"></i>
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

export default Table
