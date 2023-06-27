import type { NextPage } from 'next'
import MainLayout from '../../layout/MainLayout'

const MenuStudents: NextPage = () => {
  return (
    <MainLayout title="Cardápio Alunos">
      <div className="d-sm-flex flex-column">
        <nav
          className="navbar px-4  align-items-center justify-content-around"
          style={{ backgroundColor: '#ecfcf0' }}
        >
          <h3>Cardápio Almoço</h3>
          <h4 className="text-danger ">Ausências: 0/3</h4>
          <h4 className="text-success">Aluno Liberado</h4>
        </nav>
        <div className="d-flex flex-column flex-lg-row align-items-center py-5 justify-content-around">
          <div
            className="card border-success mb-3 shadow-sm"
            style={{ maxWidth: '18rem' }}
          >
            <div className="card-header bg-success gap-3 text-nowrap text-dark bg-opacity-50  align-items-center text-success justify-content-between d-flex ">
              Confirmar Agendamento:
              <div className="fs-4 form-check form-switch ">
                <input
                  className="fs-4 form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
            <div className="card-body  text-success">
              <h5 className="card-title">Agendar</h5>
              <div className="d-flex gap-1 justify-content-center">
                <strong>98</strong>
                <p>Vagas Restantes</p>
              </div>
              <p className="card-text">Agendar para o dia 20/10/2021</p>
            </div>
          </div>

          <div
            className="card text-bg-warning mb-3 px-5 py-2 shadow-sm"
            style={{ maxWidth: '18rem' }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title text-nowrap">
                <i className="bi bi-stopwatch"></i> Tempo Restante
              </h5>
              <p className="card-text">00 dias 01:56:33</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row px-lg-3 gap-2 mb-5 py-3 align-items-center justify-content-between bg-light">
        <h4 className="m-0">Cardápio da Semana</h4>
        <p className="m-0">
          Semana atual: <strong>26/06/2023 a 30/06/2023</strong>
        </p>
      </div>
      <div className=" pb-5" />
    </MainLayout>
  )
}

export default MenuStudents
