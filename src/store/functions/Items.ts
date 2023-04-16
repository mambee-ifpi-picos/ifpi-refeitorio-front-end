import { Item } from '../../types/Items'

const API_URL = process.env.API_URL
const BASE_URL = 'items'

export type ItemsFunctionsType = {
  getItems: () => Promise<{ code: number; response: string | Item[] }>
  addItem: (
    item: string
  ) => Promise<{ code: number; response: { msg: string; item: Item } }>
  editItem: (
    id: number,
    newName: string
  ) => Promise<{ code: number; response: { msg: string; item: Item } }>
  deleteItem: (
    id: number
  ) => Promise<{ code: number; response: { msg: string; item: Item } }>
}

const ItemsFunctions: ItemsFunctionsType = {
  getItems: async () => {
    const response: Response = await fetch(`${API_URL}/${BASE_URL}`)
    const json: string | Item[] = await response.json()
    return { code: response.status, response: json }
  },

  addItem: async (item: string) => {
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
    return { code: response.status, response: json }
  },

  editItem: async (id: number, newName: string) => {
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
    return { code: response.status, response: json }
  },

  deleteItem: async (id: number) => {
    const response: Response = await fetch(`${API_URL}/${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
    const json = await response.json()
    return { code: response.status, response: json }
  },
}

export default ItemsFunctions
