import type { NextPage } from 'next'
import MainLayout from '../../layout/MainLayout'
import Table from '../../components/MenuTable'
import { useEffect, useState } from 'react'
import initialAndFinalDaysOfWeek from '../../utils/dates/initialAndFinalDaysOfWeek'
import { useGlobalContext } from '../../store'
import WeeklyDate from '../../components/WeeklyDate'
import listDaysOfWeek from '../../utils/dates/listDaysOfWeek'

const MenuStudents: NextPage = () => {
  const {
    setTempMessage,
    setListAllMenus,
    menusFunctions,
    desiredWeek,
    setListItems,
    itemsFunctions,
  } = useGlobalContext()

  const [loadingMenus, setLoadingMenus] = useState<boolean>(false)
  const [, setLoadingItems] = useState<boolean>(false)
  const [scheduling, setScheduling] = useState<boolean>(false)

  async function getMenus() {
    setListAllMenus([])
    const [initialDate, finalDate] = initialAndFinalDaysOfWeek({ desiredWeek })
    const response = await menusFunctions.getMenus(
      setTempMessage,
      initialDate,
      finalDate,
      setLoadingMenus
    )
    setListAllMenus(response)
  }

  async function getItems() {
    setListItems([])
    const response = await itemsFunctions.getItems(
      setLoadingItems,
      setTempMessage
    )
    setListItems(response)
  }

  useEffect(() => {
    async function getMenusAndItemsFunction() {
      getMenus()
      getItems() // fazer com que ocorram ao mesmo tempo
    }
    getMenusAndItemsFunction()
  }, [])

  function handleScheduling() {
    setScheduling(!scheduling)
  }

  return (
    <MainLayout title="Cardápio Alunos">
      <div className="d-sm-flex flex-column">
        <nav
          className="navbar px-4 gap-4 shadow-sm align-items-center justify-content-around"
          style={{ backgroundColor: '#ecfcf0' }}
        >
          <h3 className="m-0">Cardápios</h3>
          <div className="d-flex align-items-center gap-3 ">
            <h4 className="text-danger m-0">Ausências: 0/3</h4>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-card-list fs-5"></i>
            </button>
          </div>
          <h4 className="text-success m-0">Aluno Liberado</h4>
        </nav>
        <div className="d-flex flex-column flex-lg-row align-items-center py-5 justify-content-around">
          <div
            className="card border-success mb-4 shadow-sm"
            style={{ maxWidth: '20rem' }}
          >
            <div className="card-header fs-5 bg-success gap-3 text-nowrap text-dark bg-opacity-50  align-items-center text-success justify-content-between d-flex flex-column flex-md-row">
              Confirmar Agendamento:
              <div className="fs-4 form-check form-switch ">
                <input
                  className={`fs-3 ${
                    scheduling ? ['bg-success'] : ['bg-danger']
                  } form-check-input`}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onChange={handleScheduling}
                />
              </div>
            </div>
            <div className="card-body text-success">
              <h5 className="card-title fs-3">Agendar</h5>
              <div className="d-flex gap-1 align-items-center justify-content-center">
                <strong className="fs-4">98</strong>
                <p className="m-0">Vagas Restantes</p>
              </div>
              <p className="card-text mt-1">Agendar para o dia: </p>
              <p className="fs-5 fw-bold">
                {listDaysOfWeek({ desiredWeek })[0].toLocaleDateString('pt-BR')}
              </p>
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
              <p className="card-text fs-5">00 dias 01:56:33</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex shadow-sm flex-column flex-lg-row px-lg-3 gap-2 mb-5 py-3 align-items-center justify-content-between bg-light">
        <h4 className="m-0">Cardápio da Semana</h4>
        <div className="">
          <p className="m-0">Semana atual:</p>
          <WeeklyDate />
        </div>
      </div>
      <Table
        title="Almoço"
        // plates={allDishes}
        meal="almoço"
        editedDish={() => ''}
        loading={loadingMenus}
        // deletedDish={deleted}
      />
      <Table
        title="Jantar"
        // plates={listMenus}
        meal="janta"
        // editedDish={setSelectedDish}
        editedDish={() => ''}
        loading={loadingMenus}
        // deletedDish={deleted}
      />
      <div className=" pb-5" />
    </MainLayout>
  )
}

export default MenuStudents
