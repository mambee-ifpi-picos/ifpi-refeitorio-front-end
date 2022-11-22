import DishMenu from '../core/DishMenu'

interface TableProps {
  dish: DishMenu[]

  onClick: () => void
  editedDish?: (dish: DishMenu) => void
  deletedDish?: (dish: DishMenu) => void
}

function Table(props: TableProps) {
  function renderDishes() {
    return props.dish?.map((dish) => {
      return (
        <>
          <span>{dish.dish}</span>
        </>
      )
    })
  }
  // function renderDays() {
  //   return props.dish?.map((dish) => {
  //     return (
  //       <>
  //         <span>{dish.day}</span>
  //       </>
  //     )
  //   })
  // }

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
              Segunda-Feira
            </th>
            <td>{renderDishes()[0]}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish[0])}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => props.deletedDish?.(props.dish[0])}
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
            <td>{renderDishes()[1]}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish[1])}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                  onClick={() => props.deletedDish?.(props.dish[1])}
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
            <td>{renderDishes()[2]}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish[2])}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                  onClick={() => props.deletedDish?.(props.dish[2])}
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
            <td>{renderDishes()[3]}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish[3])}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                  onClick={() => props.deletedDish?.(props.dish[3])}
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
            <td>{renderDishes()[4]}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn shadow-sm border btn-info btn-sm"
                  onClick={() => props.editedDish?.(props.dish[4])}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn shadow-sm border btn-danger btn-sm"
                  onClick={() => props.deletedDish?.(props.dish[4])}
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
