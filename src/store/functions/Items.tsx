import { Item } from '../../types/Items'
import { Dispatch, SetStateAction } from 'react'

const API_URL = process.env.API_URL
const BASE_URL = 'items'

export type ItemsFunctionsType = {
  getItems: (
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => Promise<Item[] | string | undefined>
  addItem: (
    item: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => void
  editItem: (
    id: number,
    newName: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => void
  deleteItem: (
    id: number,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => void
}

const ItemsFunctions = () => {
  const ItemsFunctions: ItemsFunctionsType = {
    getItems: async (setLoading, setTempMessage) => {
      try {
        setLoading(true)
        const response: Response = await fetch(`${API_URL}/${BASE_URL}`)
        const json: string | Item[] = await response.json()
        if (
          response.status === 200 &&
          json.length >= 1 &&
          typeof json === 'object'
        ) {
          return json
        } else if (response.status === 200 && json.length === 0) {
          return 'Não existem itens cadastrados.'
        } else {
          typeof json === 'string' &&
            setTempMessage({ message: json, type: 'alert' })
        }
      } catch (error) {
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
        console.log(error)
      } finally {
        setLoading(false)
      }
    },

    addItem: async (item, setLoading, setTempMessage) => {
      try {
        setLoading(true)
        const response: Response = await fetch(`${API_URL}/${BASE_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: item,
          }),
        })
        const json = await response.json()
        if (response.status === 201) {
          // mensagem de sucesso
          setTempMessage({
            message: 'Item adicionado com sucesso.',
            type: 'success',
          })
        } else {
          // mensagem do back
          setTempMessage({ message: json, type: 'danger' })
        }
      } catch (error) {
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
        console.log(error)
      } finally {
        setLoading(false)
      }
    },

    editItem: async (id, newName, setLoading, setTempMessage) => {
      try {
        setLoading(true)
        const response: Response = await fetch(`${API_URL}/${BASE_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: newName,
          }),
        })
        const json = await response.json()
        if (response.status === 200) {
          // mensagem de sucesso
          setTempMessage({
            message: 'Item editado com sucesso',
            type: 'success',
          })
        } else {
          // mensagem do back
          setTempMessage({ message: json, type: 'danger' })
        }
      } catch (error) {
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
        console.log(error)
      } finally {
        setLoading(false)
      }
    },

    deleteItem: async (id, setLoading, setTempMessage) => {
      try {
        setLoading(true)
        const response: Response = await fetch(`${API_URL}/${BASE_URL}/${id}`, {
          method: 'DELETE',
        })
        const json = await response.json()
        if (response.status === 200) {
          // mensagem de sucesso
          setTempMessage({
            message: 'Item deletado com sucesso',
            type: 'success',
          })
        } else {
          // mensagem do back
          setTempMessage({ message: json, type: 'danger' })
        }
      } catch (error) {
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
        console.log(error)
      } finally {
        setLoading(false)
      }
    },
  }

  return ItemsFunctions
}

export default ItemsFunctions()
