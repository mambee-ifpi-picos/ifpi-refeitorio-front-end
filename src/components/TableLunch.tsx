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
        <tr className={`${style.BG} border border-light shadow-sm`}>
          <th scope="col" className="text-center" colSpan={3}>
            <span className="fs-4">{props.title}</span>
          </th>
        </tr>
        <tr className="bg-dark bg-gradient text-light shadow-sm">
          <th scope="col" className="col-2 text-center">
            Dia
          </th>
          <th scope="col" className="col-8 text-center">
            Prato
          </th>
          <th scope="col" className="text-center">
            Ações
          </th>
        </tr>
      </>
    )
  }

  function renderData() {
    return props.plates?.map((dish) => {
      return (
        <tr key={dish.day} className="shadow border border-secondary ">
          <td className="fw-bold border border-dark border-opacity-50 p-3">
            {dish.day}
          </td>
          <td className="p-3">{dish.dish}</td>
          {renderActions(dish)}
        </tr>
      )
    })
  }

  function renderActions(dish: DishMenu) {
    return (
      <td className="d-flex p-3  justify-content-center ">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLunch"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm mx-2 border btn-info btn-sm"
        >
          <i className="bi bi-pencil-square h6"></i>
        </button>
        <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border btn-danger btn-sm"
        >
          <i className="bi bi-trash3 h6"></i>
        </button>
      </td>
    )
  }

  return (
    <div className="table-responsive rounded">
      <table className="table border overflow-hidden rounded-top caption-top shadow text-nowrap table-bordered text-start table-hover ">
        <thead>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  )
}

export default TableLunch
