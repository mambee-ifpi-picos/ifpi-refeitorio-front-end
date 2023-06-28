import { Menu } from '../../types/Menus'
import { Dispatch, SetStateAction } from 'react'

const API_URL = process.env.API_URL
const BASE_URL = 'menu'

export type MenusFunctionsType = {
  getMenus: (
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>,
    initialDate: string,
    finalDate: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<Menu[] | []>
  createMenu: (
    menu: Menu,
    ids: number[],
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => void
  editMenu: (
    menu: Menu | undefined,
    ids: number[] | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setTempMessage: Dispatch<SetStateAction<{ message: string; type: string }>>
  ) => Promise<{ menu: Menu; msg: string } | void>
}

const MenusFunctions = () => {
  const MenusFunctions: MenusFunctionsType = {
    getMenus: async (setTempMessage, initialDate, finalDate, setLoading) => {
      try {
        setLoading(true)
        const response: Response = await fetch(
          `${API_URL}/${BASE_URL}?initialDate=${initialDate}&finalDate=${finalDate}`
        )
        const json = await response.json()
        if (
          response.status === 200 &&
          json.length >= 1 &&
          typeof json === 'object'
        ) {
          // return json
          // gambiarra
          const menus = json.map((menu: Menu) => {
            const menuEdited = {
              ...menu,
              date: new Date(menu.date).setHours(24, 0, 0, 0),
            }
            return menuEdited
          })
          return menus
        } else if (response.status === 200 && json.length === 0) {
          return []
        } else {
          typeof json === 'string' &&
            setTempMessage({ message: json, type: 'alert' })
        }
      } catch (error) {
        console.log(error)
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
      } finally {
        setLoading(false)
      }
    },
    createMenu: async (menu, ids, setLoading, setTempMessage) => {
      console.log(menu)
      try {
        setLoading(true)
        const response: Response = await fetch(`${API_URL}/${BASE_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: menu.date,
            meal: menu.meal,
            items: ids,
          }),
        })
        const json = await response.json()
        if (response.status === 200) {
          return json
        } else {
          setTempMessage({ message: json.msg, type: 'alert' })
        }
      } catch (error) {
        console.log(error)
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
      } finally {
        setLoading(false)
      }
    },
    editMenu: async (menu, ids, setLoading, setTempMessage) => {
      if (menu == undefined || ids == undefined) return
      try {
        setLoading(true)
        const response: Response = await fetch(
          `${API_URL}/${BASE_URL}/${menu.id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              items: ids,
            }),
          }
        )
        const json = await response.json()
        if (response.status === 200) {
          return json
        } else {
          setTempMessage({ message: json, type: 'alert' })
        }
      } catch (error) {
        console.log(error)
        setTempMessage({
          message:
            'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde',
          type: 'danger',
        })
      } finally {
        setLoading(false)
      }
    },
  }

  return MenusFunctions
}

export default MenusFunctions()
