import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'

import DishMenu from '../core/DishMenu'
import { useState } from 'react'
import EditDish from '../components/EditDish'
import Button from '../components/Button'

const dishesDefault = [
  new DishMenu('Segunda-feira', 'arroz, feijao, carne, salada'),
  new DishMenu('Terça-feira', 'arroz, galinha, salada crua'),
  new DishMenu('Quarta-feira', 'arroz Branco, galinha Assada, salada'),
  new DishMenu('Quinta-feira', 'arroz, galinha, colve, salada'),
  new DishMenu('Sexta-feira', 'arroz, assado, salada de batata'),
]

const Menu: NextPage = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [selectedDish, setSelectedDish] = useState<DishMenu>(DishMenu.empty())
  const [dishes, setDishes] = useState(dishesDefault)

  function dishSelected(dish: DishMenu) {
    setSelectedDish(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deleted(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function updatePlate(dish: DishMenu) {
    console.log('savePlate', dish.dish)
    dishes.filter((d) => d.day === dish.day).map((d) => (d.dish = dish.dish))
    setDishes([...dishes])
  }

  return (
    <MainLayout title="Cardápio">
      {visible === 'table' ? (
        <>
          <Title subTitle="Cardápio" />
          <Table
            plates={dishes}
            editedDish={dishSelected}
            deletedDish={deleted}
          />
          <Button
            className="float-end bg-primary bg-gradient"
            onClick={() => setVisible('form')}
          >
            Adicionar
          </Button>
        </>
      ) : (
        <AddDish cancel={() => setVisible('table')} />
      )}
      <EditDish
        plateChanged={updatePlate}
        plate={selectedDish}
        text={dishSelected}
      />
    </MainLayout>
  )
}

export default Menu
