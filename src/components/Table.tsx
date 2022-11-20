// import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS

function Table() {
  return (
    <div
      className={`
            d-flex flex-column
            bg-light text-secondary
        `}
    >
      <div className="container rounded-4 shadow p-3 mb-5 bg-body border d-flex flex-column gap-5 text-center">
        <div className="row  border-bottom  p-2 text-start ">
          <div className="col border-end">Dia</div>
          <div className="col-8 border-end">Prato</div>
          <div className="col">Ação</div>
        </div>

        <div className="row p-2  border-bottom  text-start ">
          <div className="col text-nowrap border-end">Segunda-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col">3 of 3</div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Terça-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col">3 of 3</div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Quarta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col">3 of 3</div>
        </div>
        <div className="row p-2  border-bottom  text-start ">
          <div className="col border-end">Quinta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col">3 of 3</div>
        </div>
        <div className="row p-2  text-start ">
          <div className="col border-end">Sexta-feira</div>
          <div className="col-8 border-end">Vazio</div>
          <div className="col">3 of 3</div>
        </div>
      </div>
    </div>
  )
}

export default Table
