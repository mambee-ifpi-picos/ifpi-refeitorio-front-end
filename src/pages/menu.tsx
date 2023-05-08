import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/MenuTable'
import Title from '../components/Title'
// import Button from '../components/Button'
import EditDish from '../components/EditDish'
import WeeklyDate from '../components/WeeklyDate'
import useDishes from '../hooks/useDishes'
import { useGlobalContext } from '../store'
import { useEffect, useState } from 'react'
// import { InitialAndFinalDays } from '../utils/dates'
import initialAndFinalDaysOfWeek from '../utils/dates/initialAndFinalDaysOfWeek'

const Menu: NextPage = () => {
  const { setTempMessage, setListAllMenus, menusFunctions, desiredWeek } =
    useGlobalContext()
  const { selectedDish, setSelectedDish, updatePlate } = useDishes()

  const [loading, setLoading] = useState<boolean>(false)

  async function getMenus() {
    setListAllMenus([])
    const [initialDate, finalDate] = initialAndFinalDaysOfWeek({ desiredWeek })
    const response = await menusFunctions.getMenus(
      setTempMessage,
      initialDate,
      finalDate,
      setLoading
    )
    setListAllMenus(response)
  }

  useEffect(() => {
    async function getMenusFunction() {
      await getMenus()
    }
    getMenusFunction()
  }, [])

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Cardápio Semanal" />
      <WeeklyDate />
      {/* <Table
        title="Almoço"
        plates={allDishes}
        meal="almoço"
        editedDish={setSelectedDish}
        // deletedDish={deleted}
      /> */}
      <Table
        title="Jantar"
        // plates={listMenus}
        meal="janta"
        // editedDish={setSelectedDish}
        editedDish={() => ''}
        loading={loading}
        // deletedDish={deleted}
      />
      <EditDish
        plateChanged={updatePlate}
        plate={selectedDish}
        text={setSelectedDish}
      />
    </MainLayout>
  )
}

export default Menu
