import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import itemsFunctions, { ItemsFunctionsType } from './functions/Items'
import { Item } from '../types/Items'

interface IGlobalContextProps {
  tempMessage: { message: string; type: string }
  setTempMessage:
    | Dispatch<SetStateAction<{ message: string; type: string }>>
    | (() => void)
  listItems: Item[] | string | undefined
  setListItems:
    | Dispatch<SetStateAction<Item[] | string | undefined>>
    | (() => void)
  itemsFunctions: ItemsFunctionsType
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  tempMessage: { message: '', type: '' },
  setTempMessage: () => {
    return
  },
  listItems: [],
  setListItems: () => {
    return
  },
  itemsFunctions: itemsFunctions,
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

  // ITEMS

  const [listItems, setListItems] = useState<Item[] | string | undefined>([])

  // MENUS

  return (
    <GlobalContext.Provider
      value={{
        tempMessage,
        setTempMessage,
        listItems,
        setListItems,
        itemsFunctions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
