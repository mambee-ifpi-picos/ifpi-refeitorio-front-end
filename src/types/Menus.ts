import { Dispatch, SetStateAction } from 'react'

type ItemInMenu = {
  active: boolean
  createdAt: string
  id: number
  name: string
}

export type Menu = {
  date: string
  description?: string
  id?: number
  items: ItemInMenu[]
  meal: string
  state?: boolean
}

export type ListAllMenus = Menu[] | undefined
export type SetListAllMenus =
  | Dispatch<SetStateAction<Menu[] | undefined>>
  | (() => void)
export type SetDesiredWeek = Dispatch<SetStateAction<number>> | (() => void)
export type selectedMenu = Menu | undefined
export type setSelectedMenu =
  | Dispatch<SetStateAction<Menu | undefined>>
  | (() => void)
