import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Table from '../components/Table'

const Menu: NextPage = () => {
  return (
    <MainLayout title="Cardápio">
      <div className="text-center pb-4 d-flex flex-column align-items-center">
        <h1>Cardápio</h1>
      </div>
      <Table />
    </MainLayout>
  )
}

export default Menu
