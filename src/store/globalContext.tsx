import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import itemsFunctions, { ItemsFunctionsType } from './functions/Items'
import menusFunctions, { MenusFunctionsType } from './functions/Menus'
import { Item, ListItems, SetListItems } from '../types/Items'
import {
  ListAllMenus,
  Menu,
  SetListAllMenus,
  SetDesiredWeek,
} from '../types/Menus'

interface IGlobalContextProps {
  tempMessage: { message: string; type: string }
  setTempMessage:
    | Dispatch<SetStateAction<{ message: string; type: string }>>
    | (() => void)

  listNameDays: string[]

  listItems: ListItems
  setListItems: SetListItems
  itemsFunctions: ItemsFunctionsType

  listAllMenus: ListAllMenus
  setListAllMenus: SetListAllMenus
  menusFunctions: MenusFunctionsType
  desiredWeek: number
  setDesiredWeek: SetDesiredWeek
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  tempMessage: { message: '', type: '' },
  setTempMessage: () => {
    return
  },

  listNameDays: [],

  listItems: [],
  setListItems: () => {
    return
  },
  itemsFunctions: itemsFunctions,

  listAllMenus: [],
  setListAllMenus: () => {
    return
  },
  menusFunctions: menusFunctions,
  desiredWeek: 0,
  setDesiredWeek: () => {
    return
  },
})

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const [tempMessage, setTempMessage] = useState<{
    message: string
    type: string
  }>({ message: '', type: '' })

  const listNameDays = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ]

  // ITEMS

  const [listItems, setListItems] = useState<Item[] | string | undefined>([])

  // MENUS

  const [listAllMenus, setListAllMenus] = useState<Menu[] | [] | undefined>([])
  const [desiredWeek, setDesiredWeek] = useState<number>(0)

  return (
    <GlobalContext.Provider
      value={{
        tempMessage,
        setTempMessage,

        listNameDays,

        listItems,
        setListItems,
        itemsFunctions,

        listAllMenus,
        setListAllMenus,
        menusFunctions,
        desiredWeek,
        setDesiredWeek,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
