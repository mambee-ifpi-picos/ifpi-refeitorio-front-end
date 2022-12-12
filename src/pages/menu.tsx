import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Table from '../components/Table'
import AddDish from '../components/AddDish'
import Title from '../components/Title'
import EditDish from '../components/EditDish'
import Button from '../components/Button'
import useDishesDinner from '../hooks/useDishesDinner'
import useDishesLunch from '../hooks/useDishesLunch'
import EditDishLunch from '../components/EditDishLunch'
import TableLunch from '../components/TableLunch'

const Menu: NextPage = () => {
  // Tabela da Janta
  const {
    visible,
    setVisible,
    selectedDish,
    dishes,
    dishSelected,
    deleted,
    updatePlate,
  } = useDishesDinner()

  // Tabela do Almoço
  const {
    selectedDishLunch,
    dishesLunch,
    dishSelectedLunch,
    deletedLunch,
    updatePlateLunch,
  } = useDishesLunch()

  return (
    <MainLayout title="Cardápio">
      {visible === 'table' ? (
        <>
          <Title subTitle="Cardápio Semanal" />
          <TableLunch
            title="Almoço"
            plates={dishesLunch}
            editedDish={dishSelectedLunch}
            deletedDish={deletedLunch}
          />
          <Table
            title="Jantar"
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
      <>
        <EditDish
          plateChanged={updatePlate}
          plate={selectedDish}
          text={dishSelected}
        />
        <EditDishLunch
          plateChanged={updatePlateLunch}
          plate={selectedDishLunch}
          text={dishSelectedLunch}
        />
      </>
    </MainLayout>
  )
}

export default Menu
