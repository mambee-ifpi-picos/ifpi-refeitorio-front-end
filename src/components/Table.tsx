import DishMenu from '../core/DishMenu'

interface TableProps {
  dish: DishMenu[]

  onClick: () => void
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

function Table(props: TableProps) {
  function renderHeader() {
    return (
      <thead>
        <tr className="table-dark ">
          <th scope="col" className="col-2 ">
            Dia
          </th>
          <th scope="col" className="col-8 text-center">
            Prato
          </th>
          <th scope="col" className="text-center">
            Ação
          </th>
        </tr>
      </thead>
    )
  }

  function renderData() {
    return props.dish?.map((dish) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <tr>
          <th className="bg-primary text-dark bg-opacity-10" scope="row">
            {dish.day}
          </th>
          <td>{dish.dish}</td>
          <td>
            <div className="col d-flex justify-content-evenly">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                // value={props.dish.dish}

                // data-bs-whatever="@mdo"
                // data-bs-toggle="modal"
                // data-bs-target="#staticBackdrop"
                type="button"
                className="btn shadow-sm border btn-info btn-sm"
                onClick={() => props.editedDish?.(dish)}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                onClick={() => props.deletedDish?.(dish)}
                type="button"
                className="btn shadow-sm border btn-danger btn-sm"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="table-responsive rounded ">
      <table className="table border border-2 caption-top shadow-sm text-nowrap table-bordered text-start table-hover ">
        {renderHeader()}
        <tbody className="">{renderData()}</tbody>
      </table>
      <div className="col  d-flex justify-content-end ">
        <button
          type="button"
          onClick={props.onClick}
          className="btn border border-2 btn-primary shadow-sm "
        >
          <i className="bi bi-plus-lg h6"> Adicionar</i>
        </button>
      </div>
    </div>
  )
}

export default Table
