import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import MainLayout from '../layout/MainLayout'
import Title from '../components/Title'
import Button from '../components/Button'
import SingleModal from '../components/SingleModal'
import Loading from '../components/Loading'

import { useGlobalContext } from '../store'

const Items: NextPage = () => {
  const { setTempMessage, listItems, setListItems, itemsFunctions } =
    useGlobalContext()

  const [selectedItem, setSelectedItem] = useState<{
    id: number
    name: string
  }>()
  const [inputItem, setInputItem] = useState<string>('')
  const [inputEditItem, setInputEditItem] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function getItems() {
    setListItems([])
    const response = await itemsFunctions.getItems(setLoading, setTempMessage)
    setListItems(response)
  }

  async function addItem() {
    if (!inputItem) {
      setTempMessage({
        message: 'Preencha o campo do nome do item a ser adicionado.',
        type: 'warning',
      })
      return
    }
    await itemsFunctions.addItem(inputItem, setLoading, setTempMessage)
    await getItems()
  }

  async function editItem() {
    if (!inputEditItem || !selectedItem) return
    await itemsFunctions.editItem(
      selectedItem.id,
      inputEditItem,
      setLoading,
      setTempMessage
    )
    await getItems()
  }

  async function deleteItem() {
    if (!selectedItem) return
    await itemsFunctions.deleteItem(selectedItem.id, setLoading, setTempMessage)
    await getItems()
  }

  useEffect(() => {
    async function asyncGetItems() {
      await getItems()
    }
    asyncGetItems()
  }, [])

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Itens do cardápio" />
      <form>
        <div className="mb-3 d-flex flex-column gap-2">
          <label
            className="d-flex fw-semibold col-form-label fs-5"
            htmlFor="inputAddItem"
          >
            Adicione um novo item:
          </label>
          <div className="d-flex gap-3 justify-content-between flex-wrap">
            <div className="d-flex gap-2">
              <input
                placeholder="Nome do item"
                id="inputAddItem"
                className="form-control "
                type="text"
                value={inputItem}
                onChange={(e) => setInputItem(e.target.value)}
              />
              <Button onClick={addItem} className="btn-success">
                Adicionar
              </Button>
            </div>
            {/* <div className="dropdown position-static">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {`Ordenar por `}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Nome &#40;A - Z&#41;
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Adicionados recentemente
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </form>
      <div className="d-flex fs-5 text-uppercase pt-3 gap-3 flex-wrap">
        {loading ? (
          <Loading />
        ) : listItems?.length ? (
          listItems.map((element, index) => {
            return (
              <div
                key={element.id}
                className="text-success gap-3 shadow-sm rounded ps-2 border border-success d-flex gap-2 align-items-center"
              >
                {element.name}
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    className="btn fs-5 shadow-sm btn-danger btn-sm"
                    type="button"
                    title="Deletar item"
                    data-bs-toggle="modal"
                    data-bs-target="#idModalDeleteItem"
                    onClick={() => {
                      setSelectedItem(listItems[index])
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn fs-5 shadow-sm btn-success btn-sm"
                    type="button"
                    title="Editar item"
                    data-bs-toggle="modal"
                    data-bs-target="#idModalEditItem"
                    onClick={() => {
                      setSelectedItem(listItems[index])
                    }}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <p className="fw-bold opacity-50">Não existem itens cadastrados</p>
        )}
      </div>
      <SingleModal
        id="idModalDeleteItem"
        modalTitle="Deletar item"
        action="Deletar"
        onClickSuccess={deleteItem}
      >
        Tem certeza que deseja deletar o item?{' '}
        <h5 className="text-danger text-uppercase">{selectedItem?.name}</h5>
      </SingleModal>
      <SingleModal
        id="idModalEditItem"
        modalTitle="Editar item"
        action="Editar"
        onClickSuccess={editItem}
        onClickCancel={() => setInputEditItem('')}
      >
        <label className="d-flex col-form-label" htmlFor="inputEditItem">
          Editar item <h5 className="px-2">{selectedItem?.name}</h5> para:
        </label>
        <input
          id="inputEditItem"
          className="form-control "
          type="text"
          value={inputEditItem}
          onChange={(e) => setInputEditItem(e.target.value)}
        />
      </SingleModal>
    </MainLayout>
  )
}

export default Items
