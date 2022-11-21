import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'
import DishMenu from '../core/DishMenu'

const Menu: NextPage = () => {
  const dishes = [
    new DishMenu('Segunda-feira', 'arroz, feijao, carne, salada'),
    // new DishMenu('Terça-feira', 'arroz, galinha, salada')
  ]

  return (
    <MainLayout title="Cardápio">
      <Title>Cardápio</Title>
      <Table dish={dishes} />
      <AddDish />
    </MainLayout>
  )
}

export default Menu
