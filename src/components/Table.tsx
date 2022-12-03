import DishMenu from '../core/DishMenu'

interface TableProps {
  plates: DishMenu[]
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

function Table(props: TableProps) {
  function renderHeader() {
    return (
      <>
        <tr className="bg-dark bg-gradient text-light shadow-sm">
          <th scope="col" className="text-center" colSpan={3}>
            <span className="fs-4">Jantar</span>
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
        <tr key={dish.day} className="shadow-sm">
          <td className="fw-bold d-flex align-items-center p-3">{dish.day}</td>
          <td className="p-3">{dish.dish}</td>
          {renderActions(dish)}
        </tr>
      )
    })
  }

  function renderActions(dish: DishMenu) {
    return (
      <td className="d-flex justify-content-center ">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm mx-2 border btn-info btn-sm"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border btn-danger btn-sm"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </td>
    )
  }

  return (
    <div className="table-responsive rounded ">
      <table className="table border border-2 caption-top shadow-sm text-nowrap table-bordered text-start table-hover ">
        <thead>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  )
}

export default Table
