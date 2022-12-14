import DishMenu from '../core/DishMenu'
import style from '../styles/Home.module.css'
import { daysAll, days } from './TableLunch'

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
      <th className="text-center" colSpan={1}>
        {days[i]}
        <br />
        {day.toLocaleDateString('pt-BR')}
      </th>
    )
  })
}

function Table(props: TableProps) {
  function renderHeader() {
    return (
      <>
        <tr className={`${style.BG}  shadow-sm`}>
          <th scope="row" className="text-center" colSpan={7}>
            <span className="fs-4">{props.title}</span>
          </th>
        </tr>
        <tr className="bg-dark h6 text-wrap bg-gradient align-middle text-light shadow-sm">
          <th className="text-center" colSpan={1}>
            Composiçao
          </th>
          {renderdateDays()}
          <th className="text-center" colSpan={1}>
            Ação
          </th>
        </tr>
      </>
    )
  }

  function renderData() {
    return props.plates?.map((dish) => {
      return (
        <>
          <tr key={dish.day} className="shadow border  border-secondary ">
            <th
              scope="row"
              colSpan={1}
              className="fw-bold border  border-dark  text-center border-opacity-50"
            >
              <small>{dish.day}</small>
            </th>
            <td colSpan={1} className="lh-base text-center text-wrap">
              {dish.dish}
            </td>
            <td colSpan={1} className="lh-base text-center text-wrap">
              {dish.dish}
            </td>
            <td colSpan={1} className="lh-base text-center text-wrap">
              {dish.dish}
            </td>
            <td colSpan={1} className="lh-base text-center text-wrap">
              {dish.dish}
            </td>
            <td colSpan={1} className="lh-base text-center text-wrap">
              {dish.dish}
            </td>
            {renderActions(dish)}
          </tr>
        </>
      )
    })
  }

  function renderActions(dish: DishMenu) {
    return (
      <td scope="col" colSpan={1} className="p-3 text-center">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalToggle"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm border btn-success btn-sm"
        >
          <i className="bi bi-pencil-square h6"></i>
        </button>
        {/* <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border ms-3 btn-outline-danger btn-sm"
        >
          <i className="bi bi-trash3 h6"></i>
        </button> */}
      </td>
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
