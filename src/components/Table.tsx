import DishMenu from '../core/DishMenu'

interface TableProps {
  dish: DishMenu

  onClick: () => void
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

function Table(props: TableProps) {
  return (
    <div className="table-responsive rounded ">
      <table className="table border border-2 caption-top shadow-sm text-nowrap table-bordered text-start table-hover ">
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
        <tbody className="">
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Segunda-feira
            </th>
            <td>{props.dish.dish}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // value={props.dish[1].dish}

                  data-bs-whatever="@mdo"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish)}
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Terça-feira
            </th>
            <td>{props.dish.dish}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // value={props.dish[1].dish}

                  data-bs-whatever="@mdo"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish)}
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Quarta-feira
            </th>
            <td>{props.dish.dish}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // value={props.dish[1].dish}

                  data-bs-whatever="@mdo"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish)}
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Quinta-feira
            </th>
            <td>{props.dish.dish}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // value={props.dish[1].dish}

                  data-bs-whatever="@mdo"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish)}
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Sexta-feira
            </th>
            <td>{props.dish.dish}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // value={props.dish[1].dish}

                  data-bs-whatever="@mdo"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish)}
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
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
