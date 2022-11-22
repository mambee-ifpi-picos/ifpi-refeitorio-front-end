import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'
import DishMenu from '../core/DishMenu'
import { useState } from 'react'

const Menu: NextPage = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const dishes = [
    new DishMenu('arroz, feijao, carne, salada'),
    new DishMenu('arroz, galinha, salada crua'),
    new DishMenu('arroz Branco, galinha Assada, salada'),
    new DishMenu('arroz, galinha, colve, salada'),
    new DishMenu('arroz, assado, salada de batata'),
  ]

  function dishSelected(dishes: DishMenu) {
    console.log(dishes.dish)
  }
  function deleted(dishes: DishMenu) {
    console.log(`Deletando ... ${dishes.dish}`)
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
      {/* <EditDish  /> */}
    </MainLayout>
  )
}

export default Menu
