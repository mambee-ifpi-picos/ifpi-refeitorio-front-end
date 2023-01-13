import { useState } from 'react'

export default function useItems() {
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
      {
        id: 9,
        item: 'teste',
      },
    ].sort()
  )

  return {
    listItems,
    setListItems,
  }
}
