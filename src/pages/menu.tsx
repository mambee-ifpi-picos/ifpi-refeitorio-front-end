import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import Title from '../components/Title'
// import Button from '../components/Button'
import EditDishLunch from '../components/EditDishLunch'
import TableLunch from '../components/TableLunch'
import WeeklyDate from '../components/WeeklyDate'
import useDishes from '../hooks/useDishes'

const Menu: NextPage = () => {
  const {
    allDishes,
    selectedDish,
    setSelectedDish,
    updatePlate,
    // dishes,
    // updatePlate,
    // deleted,

    // selectedDishLunch,
    // setSelectedDishLunch,
    // dishesLunch,
    // updatePlateLunch,
    // deletedLunch,
  } = useDishes()

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Cardápio Semanal" />
      <WeeklyDate />
      <TableLunch
        title="Almoço"
        plates={allDishes}
        editedDish={setSelectedDish}
        // deletedDish={deletedLunch}
      />
      <Table
        title="Jantar"
        plates={allDishes}
        editedDish={setSelectedDish}
        // deletedDish={deleted}
      />
      {}
      {/* <EditDish
        // plateChanged={updatePlate}
        plate={selectedDish}
        text={setSelectedDish}
      /> */}
      <EditDishLunch
        plateChanged={updatePlate}
        plate={selectedDish}
        text={setSelectedDish}
      />
    </MainLayout>
  )
}

export default Menu
