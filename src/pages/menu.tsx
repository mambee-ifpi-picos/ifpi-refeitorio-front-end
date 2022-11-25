import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'
import DishMenu from '../core/DishMenu'
import { useState } from 'react'
import EditDish from '../components/EditDish'

const Menu: NextPage = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [dish, setDish] = useState<DishMenu>(DishMenu.empty())

  const dishes = [
    new DishMenu('Segunda-feira', 'arroz, feijao, carne, salada'),
    new DishMenu('Terça-feira', 'arroz, galinha, salada crua'),
    new DishMenu('Quarta-feira', 'arroz Branco, galinha Assada, salada'),
    new DishMenu('Quinta-feira', 'arroz, galinha, colve, salada'),
    new DishMenu('Sexta-feira', 'arroz, assado, salada de batata'),
  ]

  // const [dish, setDish] = useState<DishMenu>(DishMenu.empty())

  function dishSelected(dishes: DishMenu) {
    setDish(dishes)
    console.log(dishes.dish)
    console.log(dishes.day)
  }
  function deleted(dishes: DishMenu) {
    console.log(`Deletando ... ${dishes.dish}`)
  }
  function savePlate(dishes: DishMenu) {
    console.log(dishes)
  }

  return (
    <MainLayout title="Cardápio">
      {visible === 'table' ? (
        <>
          <Title subTitle="Cardápio" />
          <Table
            onClick={() => setVisible('form')}
            dish={dishes}
            editedDish={dishSelected}
            deletedDish={deleted}
          />
        </>
      ) : (
        <AddDish cancel={() => setVisible('table')} />
      )}
      <EditDish
        // valueChanged={dishSelected}
        plateChanged={savePlate}
        dish={dish}
      />
    </MainLayout>
  )
}

export default Menu
