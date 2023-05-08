import { Dispatch, SetStateAction } from 'react'

export type Item = {
  active: boolean
  createdAt: string
  id: number
  name: string
}

export type ListItems = Item[] | string | undefined
export type SetListItems =
  | Dispatch<SetStateAction<Item[] | string | undefined>>
  | (() => void)
