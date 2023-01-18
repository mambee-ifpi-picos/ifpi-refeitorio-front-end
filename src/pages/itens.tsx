import { MouseEvent, SyntheticEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Title from '../components/Title'
import Button from '../components/Button'
import SingleModal from '../components/SingleModal'
import useItems from '../hooks/useItems'
// import { link } from 'fs'

const Items: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: number
    name: string
  }>()
  const [inputItem, setInputItem] = useState<string>('')
  const [inputEditItem, setInputEditItem] = useState<string>('')

  const { listItems, setListItems } = useItems()
  const linkRoot = 'http://localhost:3000'

  async function addItem(
    e: MouseEvent<HTMLButtonElement> | SyntheticEvent<HTMLFormElement>
  ) {
    e.preventDefault()
    const input: HTMLInputElement | null =
      document.querySelector('#inputAddItem')
    if (!input || !input.value) return
    const response = await fetch(`${linkRoot}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: input.value,
      }),
    })
    const json = await response.json()
    console.log(json)
    getItems()
  }

  async function getItems() {
    const response = await fetch(`${linkRoot}/items`)
    const json = await response.json()
    setListItems(json)
  }

  async function deleteItem() {
    if (!selectedItem) return
    const response = await fetch(`${linkRoot}/items/${selectedItem.id}`, {
      method: 'DELETE',
    })
    const json = await response.json()
    console.log(json)
    getItems()
  }

  async function editItem() {
    if (!inputEditItem || !selectedItem) return
    const response = await fetch(`${linkRoot}/items/${selectedItem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputEditItem,
      }),
    })
    const json = await response.json()
    console.log(json)
    setInputEditItem('')
    getItems()
  }

  useEffect(() => {
    async function asyncGetItems() {
      await getItems()
    }
    asyncGetItems()
  }, [getItems])

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Itens do cardápio" />
      <form onSubmit={addItem}>
        <div className="mb-3 d-flex flex-column gap-3">
          <label
            className="d-flex fw-semibold col-form-label fs-4"
            htmlFor="inputAddItem"
          >
            Adicione um novo item
          </label>
          <div className="d-flex gap-3 justify-content-between flex-wrap">
            <div className="d-flex gap-2">
              <input
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
            <div className="dropdown position-static">
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
                    Nome &#40;A-Z&#41;
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Adicionados recentemente
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex gap-3 flex-wrap">
        {listItems?.map((element, index) => (
          <div
            key={element.id}
            className="btn text-success border-success d-flex gap-3 align-items-center"
          >
            {element.name}
            <div className="d-flex gap-2">
              <button
                className="btn shadow-sm border btn-danger btn-sm"
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
                className="btn shadow-sm border btn-success btn-sm"
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
        ))}
      </div>
      <SingleModal
        id="idModalDeleteItem"
        modalTitle="Deletar item"
        action="Deletar"
        onClickSuccess={deleteItem}
      >
        Tem certeza que deseja deletar o item &lt; {selectedItem?.name} &gt;?
      </SingleModal>
      <SingleModal
        id="idModalEditItem"
        modalTitle="Editar item"
        action="Editar"
        onClickSuccess={editItem}
        onClickCancel={() => setInputEditItem('')}
      >
        <label className="d-flex col-form-label" htmlFor="inputEditItem">
          Editar item &lt; {selectedItem?.name} &gt; para:
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
