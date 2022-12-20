import { MouseEvent, SyntheticEvent, useState } from 'react'
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Title from '../components/Title'
import Button from '../components/Button'
import SingleModal from '../components/SingleModal'

const Items: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: number
    item: string
  }>()
  const [inputItem, setInputItem] = useState<string>('')
  const [inputEditItem, setInputEditItem] = useState<string>('')
  const [listItems, setListItems] = useState<{ id: number; item: string }[]>(
    [
      {
        id: 1,
        item: 'arroz',
      },
      {
        id: 2,
        item: 'fruta',
      },
      {
        id: 3,
        item: 'feijoada',
      },
      {
        id: 4,
        item: 'melancia',
      },
      {
        id: 5,
        item: 'salada cozida',
      },
      {
        id: 6,
        item: 'estrogonofe',
      },
      {
        id: 7,
        item: 'frango',
      },
      {
        id: 8,
        item: 'feijão',
      },
    ].sort()
  )

  function addItem(
    e: MouseEvent<HTMLButtonElement> | SyntheticEvent<HTMLFormElement>
  ) {
    e.preventDefault()
    const input: HTMLInputElement | null =
      document.querySelector('#inputAddItem')
    if (!input || !input.value) return
    setListItems((list) => [...list, { item: input.value, id: 40 }])
    setInputItem('')
  }

  function deleteItem() {
    listItems.forEach((element) => {
      element === selectedItem
        ? listItems.splice(listItems.indexOf(element), 1)
        : null
    })
    setListItems([...listItems])
  }

  function editItem() {
    let itemEdited!: number
    listItems.forEach((element) => {
      element === selectedItem
        ? (itemEdited = listItems.indexOf(selectedItem))
        : null
    })
    console.log('item editado')
    listItems[itemEdited].item = inputEditItem
    setListItems([...listItems])
    setInputEditItem('')
  }

  function cancelEditItem() {
    setInputEditItem('')
  }

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Itens do cardápio" />
      <form onSubmit={addItem}>
        <div className="mb-3 d-flex flex-column gap-3">
          <label
            className="d-flex fw-semibold col-form-label"
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
                    Ordem alfabética
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
        {listItems.map((element, index) => (
          <div
            key={element.id}
            className="btn text-success border-success d-flex gap-3 align-items-center"
          >
            {element.item}
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
        Tem certeza que deseja deletar o item &lt; {selectedItem?.item} &gt;?
      </SingleModal>
      <SingleModal
        id="idModalEditItem"
        modalTitle="Editar item"
        action="Editar"
        onClickSuccess={editItem}
        onClickCancel={cancelEditItem}
      >
        <label className="d-flex col-form-label" htmlFor="inputEditItem">
          Editar item &lt; {selectedItem?.item} &gt; para:
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
