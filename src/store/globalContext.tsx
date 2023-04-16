import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import itemsFunctions, { ItemsFunctionsType } from './functions/Items'
import { Item } from '../types/Items'

interface IGlobalContextProps {
  listItems: Item[]
  setListItems: Dispatch<SetStateAction<Item[]>> | (() => void)
  itemsFunctions: ItemsFunctionsType
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
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
  // ITEMS

  const [listItems, setListItems] = useState<Item[]>([])

  // MENUS

  return (
    <GlobalContext.Provider
      value={{
        listItems,
        setListItems,
        itemsFunctions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
