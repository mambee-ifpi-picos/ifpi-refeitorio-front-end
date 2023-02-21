import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import Title from '../components/Title'
// import Button from '../components/Button'
import EditDish from '../components/EditDish'
import WeeklyDate from '../components/WeeklyDate'
import useDishes from '../hooks/useDishes'

const Menu: NextPage = () => {
  const { allDishes, selectedDish, setSelectedDish, updatePlate } = useDishes()

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Cardápio Semanal" />
      <WeeklyDate />
      <Table
        title="Almoço"
        plates={allDishes}
        meal="almoço"
        editedDish={setSelectedDish}
        // deletedDish={deleted}
      />
      <Table
        title="Jantar"
        plates={allDishes}
        meal="janta"
        editedDish={setSelectedDish}
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
