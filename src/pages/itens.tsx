import { MouseEvent, SyntheticEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Title from '../components/Title'
import Button from '../components/Button'
import SingleModal from '../components/SingleModal'
import useItems from '../hooks/useItems'
import Loading from '../components/Loading'
// import { link } from 'fs'

const Items: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: number
    name: string
  }>()
  const [inputItem, setInputItem] = useState<string>('')
  const [inputEditItem, setInputEditItem] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { listItems, setListItems } = useItems()
  const linkRoot = 'http://localhost:3000'

  async function addItem(
    e: MouseEvent<HTMLButtonElement> | SyntheticEvent<HTMLFormElement>
  ) {
    e.preventDefault()
    if (!inputItem) return
    setLoading(true)
    setInputItem('')
    const response = await fetch(`${linkRoot}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputItem,
      }),
    })
    const json = await response.json()
    setLoading(false)
    console.log(json)
    getItems()
  }

  async function getItems() {
    setLoading(true)
    const response = await fetch(`${linkRoot}/items`)
    const json = await response.json()
    setLoading(false)
    setListItems(json)
    console.log(json)
  }

  async function deleteItem() {
    if (!selectedItem) return
    setLoading(true)
    const response = await fetch(`${linkRoot}/items/${selectedItem.id}`, {
      method: 'DELETE',
    })
    const json = await response.json()
    setLoading(false)
    console.log(json)
    getItems()
  }

  async function editItem() {
    if (!inputEditItem || !selectedItem) return
    setLoading(true)
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
    setLoading(false)
    console.log(json)
    setInputEditItem('')
    getItems()
  }

  useEffect(() => {
    async function asyncGetItems() {
      await getItems()
    }
    asyncGetItems()
  }, [])

  // function orderByName (e: MouseEventHandler<HTMLLIElement> | undefined) {
  //   let listSortedByName = listItems
  //   listSortedByName?.sort((a, b) => {
  //     if (a.name < b.name)
  //         return -1;
  //     if (a.name > b.name)
  //         return 1;
  //     return 0;
  //   })
  //   setListItems(listSortedByName)
  // }

  // function orderByDate (/*e: MouseEventHandler<HTMLLIElement> | undefined*/) {
  //   let listSortedByDate = listItems
  //   listSortedByDate?.sort((a, b) => {
  //     if (a.creationDate < b.creationDate)
  //         return -1;
  //     if (a.creationDate > b.creationDate)
  //         return 1;
  //     return 0;
  //   })
  //   setListItems(listSortedByDate)
  // }

  // useEffect(() => {
  //   let listItemsSorted = [
  //     {
  //       id: 1,
  //       item: 'arroz',
  //     },
  //     {
  //       id: 3,
  //       item: 'feijoada',
  //     },
  //     {
  //       id: 4,
  //       item: 'melancia',
  //     },
  //     {
  //       id: 5,
  //       item: 'salada cozida',
  //     },
  //     {
  //       id: 2,
  //       item: 'fruta',
  //     },
  //     {
  //       id: 7,
  //       item: 'frango',
  //     },
  //     {
  //       id: 6,
  //       item: 'estrogonofe',
  //     },
  //     {
  //       id: 9,
  //       item: 'teste',
  //     },
  //     {
  //       id: 8,
  //       item: 'feijão',
  //     },
  //   ]
  //   listItemsSorted.sort((a, b) => {
  //     if (a.id < b.id)
  //         return -1;
  //     if (a.id > b.id)
  //         return 1;
  //     return 0;
  // })
  //   console.log(listItemsSorted)
  //   orderByName()
  // }, [listItems])

  return (
    <MainLayout title="Cardápio">
      <Title subTitle="Itens do cardápio" />
      <form onSubmit={addItem}>
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
        {loading ? (
          <Loading />
        ) : (
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
                    className="btn shadow-sm btn-danger  btn-sm"
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
          })
        )}
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
