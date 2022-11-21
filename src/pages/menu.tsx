import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'
import DishMenu from '../core/DishMenu'
import { useState } from 'react'

const Menu: NextPage = () => {
  const dishes = [
    new DishMenu('Segunda-feira', 'arroz, feijao, carne, salada'),
    // new DishMenu('Terça-feira', 'arroz, galinha, salada')
  ]
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <MainLayout title="Cardápio">
      {visible === 'table' ? (
        <>
          <Title subTitle="Cardápio" />
          <Table onClick={() => setVisible('form')} dish={dishes} />
        </>
      ) : (
        <AddDish cancel={() => setVisible('table')} />
      )}
    </MainLayout>
  )
}

export default Menu
