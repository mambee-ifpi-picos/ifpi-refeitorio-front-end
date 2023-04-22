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
  const { listItems, setListItems, itemsFunctions } = useGlobalContext()

  const [selectedItem, setSelectedItem] = useState<{
    id: number
    name: string
  }>()
  const [inputItem, setInputItem] = useState<string>('')
  const [inputEditItem, setInputEditItem] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function getItems() {
    try {
      setListItems('')
      setLoading(true)
      const { code, response } = await itemsFunctions.getItems()
      // gambiarra
      if (
        code === 200 &&
        response.length >= 1 &&
        typeof response === 'object'
      ) {
        setListItems(response)
      } else if (code === 200 && response.length === 0) {
        setListItems('Não existem itens cadastrados.')
      } else {
        // mensagem do back
      }
    } catch (error) {
      // mensagem de erro inesperado, tente mais tarde
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function addItem() {
    if (!inputItem) return
    try {
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { code, response } = await itemsFunctions.addItem(inputItem)
      if (code === 201) {
        // mensagem de sucesso
      } else {
        // mensagem do back
      }
    } catch (error) {
      // mensagem de erro inesperado, tente mais tarde
      console.log(error)
    } finally {
      setInputItem('')
      setLoading(false)
    }
    getItems()
  }

  async function editItem() {
    if (!inputEditItem || !selectedItem) return
    try {
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { code, response } = await itemsFunctions.editItem(
        selectedItem.id,
        inputEditItem
      )
      if (code === 200) {
        // mensagem de sucesso
      } else {
        // mensagem do back
      }
    } catch (error) {
      // mensagem de erro inesperado, tente mais tarde
      console.log(error)
    } finally {
      setInputEditItem('')
      setLoading(false)
    }
    getItems()
  }

  async function deleteItem() {
    if (!selectedItem) return
    try {
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { code, response } = await itemsFunctions.deleteItem(
        selectedItem.id
      )
      if (code === 200) {
        // mensagem de sucesso
      } else {
        // mensagem do back
      }
    } catch (error) {
      // mensagem de erro inesperado, tente mais tarde
      console.log(error)
    } finally {
      setLoading(false)
    }
    getItems()
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
      <div className="d-flex pt-3 gap-3 flex-wrap">
        {loading && <Loading />}
        {typeof listItems === 'string' && !loading && (
          <p className="fw-bold opacity-50">{listItems}</p>
        )}
        {typeof listItems === 'object' &&
          !loading &&
          listItems?.map((element, index) => {
            return (
              <div
                key={element.id}
                className="text-success rounded ps-2 border border-success d-flex gap-2 align-items-center"
              >
                {element.name}
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    className="btn shadow-sm btn-danger btn-sm"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#idModalDeleteItem"
                    onClick={() => {
                      setSelectedItem(listItems[index])
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn shadow-sm btn-success btn-sm"
                    type="button"
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
          })}
      </div>
      <SingleModal
        id="idModalDeleteItem"
        modalTitle="Deletar item"
        action="Deletar"
        onClickSuccess={deleteItem}
      >
        Tem certeza que deseja deletar o item? <h5>{selectedItem?.name}</h5>
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
