import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'

const Menu: NextPage = () => {
  return (
    <MainLayout title="Cardápio">
      <Title>Cardápio</Title>
      <Table />
      <AddDish />
    </MainLayout>
  )
}

export default Menu
