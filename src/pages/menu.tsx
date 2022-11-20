import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
// import Table from '../components/Table'
import AddDish from '../components/AddDish'

const Menu: NextPage = () => {
  return (
    <MainLayout title="Cardápio">
      <div className="text-center pb-4 d-flex flex-column align-items-center">
        <h1>Cardápio</h1>
      </div>
      {/* <Table /> */}
      <AddDish />
    </MainLayout>
  )
}

export default Menu
