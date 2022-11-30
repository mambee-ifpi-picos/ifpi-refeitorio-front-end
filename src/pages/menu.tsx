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

const Menu: NextPage = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [saveDish, setSaveDish] = useState<DishMenu>(DishMenu.empty())

  const dishes = [
    new DishMenu('Segunda-feira', 'arroz, feijao, carne, salada'),
    new DishMenu('Terça-feira', 'arroz, galinha, salada crua'),
    new DishMenu('Quarta-feira', 'arroz Branco, galinha Assada, salada'),
    new DishMenu('Quinta-feira', 'arroz, galinha, colve, salada'),
    new DishMenu('Sexta-feira', 'arroz, assado, salada de batata'),
  ]

  function dishSelected(dish: DishMenu) {
    setSaveDish(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deleted(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function savePlate(dish: DishMenu) {
    console.log(dish.dish)
    setSaveDish(dish)
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
          <Button className="float-end" onClick={() => setVisible('form')}>
            Adicionar
          </Button>
        </>
      ) : (
        <AddDish cancel={() => setVisible('table')} />
      )}
      <EditDish plateChanged={savePlate} plate={saveDish} text={dishSelected} />
    </MainLayout>
  )
}

export default Menu
