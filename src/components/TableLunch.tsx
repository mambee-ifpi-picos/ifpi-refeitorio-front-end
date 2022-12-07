import DishMenu from '../core/DishMenu'
import style from '../styles/Home.module.css'

interface TableLunchProps {
  plates: DishMenu[]
  title: string
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

function TableLunch(props: TableLunchProps) {
  function renderHeader() {
    return (
      <>
        <tr className={`${style.BG}  shadow-sm`}>
          <th scope="row" className="text-center" colSpan={6}>
            <span className="fs-4">{props.title}</span>
          </th>
        </tr>
        <tr className="bg-dark bg-gradient text-light shadow-sm">
          <th className="text-center" colSpan={1}>
            Dia
          </th>
          <th className="text-center" colSpan={4}>
            Prato
          </th>
          <th className="text-center" colSpan={1}>
            Ações
          </th>
        </tr>
      </>
    )
  }

  function renderData() {
    return props.plates?.map((dish) => {
      return (
        <tr key={dish.day} className="shadow border  border-secondary ">
          <th
            scope="row"
            colSpan={1}
            className="fw-bold border  border-dark text-center border-opacity-50 p-1"
          >
            {dish.day}
          </th>
          <td colSpan={4} className="p-3  lh-base text-wrap">
            {dish.dish}
          </td>
          {renderActions(dish)}
        </tr>
      )
    })
  }

  function renderActions(dish: DishMenu) {
    return (
      <td colSpan={1} className="p-2 text-center">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLunch"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm border btn-info btn-sm"
        >
          <i className="bi bi-pencil-square h6"></i>
        </button>
        <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border ms-3 btn-outline-danger btn-sm"
        >
          <i className="bi bi-trash3 h6"></i>
        </button>
      </td>
    )
  }

  return (
    <div className="table-responsive pb-5 rounded">
      <table className="table align-middle border overflow-hidden rounded-top caption-top shadow text-nowrap table-bordered text-start table-hover ">
        <thead>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
      <div id="liveAlertPlaceholder"></div>
    </div>
  )
}

export default TableLunch
