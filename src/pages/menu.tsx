import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/MenuTable'
import Title from '../components/Title'
// import Button from '../components/Button'
import SingleModal from '../components/SingleModal'
import WeeklyDate from '../components/WeeklyDate'
import { useGlobalContext } from '../store'
import { useEffect, useState } from 'react'
// import { InitialAndFinalDays } from '../utils/dates'
import initialAndFinalDaysOfWeek from '../utils/dates/initialAndFinalDaysOfWeek'
import DishItems from '../components/DishItems'

const Menu: NextPage = () => {
  const {
    setTempMessage,
    setListAllMenus,
    menusFunctions,
    desiredWeek,
    setListItems,
    itemsFunctions,
    selectedMenu,
  } = useGlobalContext()

  const [loadingMenus, setLoadingMenus] = useState<boolean>(false)
  const [loadingItems, setLoadingItems] = useState<boolean>(false)

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
    setListItems('')
    const response = await itemsFunctions.getItems(
      setLoadingItems,
      setTempMessage
    )
    setListItems(response)
  }

  useEffect(() => {
    async function getMenusAndItemsFunction() {
      await getMenus()
      await getItems() // fazer com que ocorram ao mesmo tempo
    }
    getMenusAndItemsFunction()
  }, [])

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Cardápio Semanal" />
      <WeeklyDate />
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
      {/* <EditDish
        plateChanged={updatePlate}
        plate={selectedDish}
        text={setSelectedDish}
      /> */}
      <SingleModal
        id="idModalEditMenu"
        modalTitle={selectedMenu?.meal == 'almoço' ? 'Almoço' : 'Jantar'}
        action="Editar"
        onClickSuccess={() => ''}
        onClickCancel={() => ''}
      >
        <form>
          {/* <div className="mb-3 h5">
          </div> */}
          <DishItems loading={loadingItems} />
        </form>
      </SingleModal>
    </MainLayout>
  )
}

export default Menu
