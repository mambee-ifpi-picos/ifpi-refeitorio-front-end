import DishMenu from '../core/DishMenu'

interface TableProps {
  dish: DishMenu[]
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
  function renderDays() {
    return props.dish?.map((dish) => {
      return (
        <>
          <span>{dish.day}</span>
        </>
      )
    })
  }

  return (
    <div className="table-responsive rounded">
      <table className="table caption-top shadow-sm text-nowrap table-bordered text-start table-hover ">
        <thead>
          <tr className="table-dark ">
            <th scope="col" className="col-2 ">
              Dia
            </th>
            <th scope="col" className="col-8">
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
              {renderDays()}
            </th>
            <td>{renderDishes()}</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button type="button" className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Terça-feira
            </th>
            <td>Vazio</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button type="button" className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Quarta-feira
            </th>
            <td>Vazio</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button type="button" className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Quinta-feira
            </th>
            <td>Vazio</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button type="button" className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className="bg-primary text-dark bg-opacity-10" scope="row">
              Sexta-feira
            </th>
            <td>Vazio</td>
            <td>
              <div className="col d-flex justify-content-evenly">
                <button type="button" className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="col d-flex justify-content-end ">
        <button type="button" className="btn btn-primary shadow-sm ">
          <i className="bi bi-plus-lg h6"> Adicionar</i>
        </button>
      </div>
    </div>
  )
}

export default Table
