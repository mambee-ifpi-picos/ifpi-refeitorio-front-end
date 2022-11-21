import DishMenu from '../core/DishMenu'

interface TableProps {
  dish: DishMenu[]
}

function Table(props: TableProps) {
  function renderDishes() {
    return props.dish?.map((dish) => {
      return (
        <>
          <p>{dish.dish}</p>
        </>
      )
    })
  }
  function renderDays() {
    return props.dish?.map((dish) => {
      return (
        <>
          <p>{dish.day}</p>
        </>
      )
    })
  }

  return (
    <div>
      <div className="container rounded-4 shadow p-3 mb-5 bg-body border d-flex flex-column gap-5 text-center">
        <div className="row  border-bottom  p-2 text-start ">
          <div className="col border-end">Dia</div>
          <div className="col-8 border-end">Prato</div>
          <div className="col">Ação</div>
        </div>

        <div className="row p-2  border-bottom  text-start ">
          <div className="col text-nowrap  border-end">{renderDays()}</div>
          <div className="col-8 border-end">{renderDishes()}</div>
          <div className="col d-flex justify-content-evenly">
            <button type="button" className="btn btn-info btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Terça-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col d-flex justify-content-evenly">
            <button type="button" className="btn btn-info btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Quarta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col d-flex justify-content-evenly">
            <button type="button" className="btn btn-info btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Quinta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col d-flex justify-content-evenly">
            <button type="button" className="btn btn-info btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div className="row p-2 border-bottom text-start ">
          <div className="col border-end">Sexta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col d-flex justify-content-evenly">
            <button type="button" className="btn btn-info btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div className="col d-flex justify-content-end ">
          <button type="button" className="btn btn-primary shadow-sm ">
            <i className="bi bi-plus-lg h6"> Adicionar</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
