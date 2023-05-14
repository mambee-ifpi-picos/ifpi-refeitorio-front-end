import { useState } from 'react'

export default function useDishesDinner() {
  const [allDishes, setAllDishes] = useState([
    {
      day: 'Segunda',
      dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
      id: 0,
      meal: 'almoço',
    },
    {
      day: 'Terça',
      dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
      id: 1,
      meal: 'almoço',
    },
    {
      day: 'Quarta',
      dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
      id: 2,
      meal: 'almoço',
    },
    {
      day: 'Quinta',
      dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
      id: 3,
      meal: 'almoço',
    },
    {
      day: 'Sexta',
      dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
      id: 4,
      meal: 'almoço',
    },

    {
      day: 'Segunda',
      dish: 'carne de figado, repolho, cenoura, fruta',
      id: 5,
      meal: 'janta',
    },
    {
      day: 'Terça',
      dish: 'carne de figado, repolho, cenoura, fruta',
      id: 6,
      meal: 'janta',
    },
    {
      day: 'Quarta',
      dish: 'carne de figado, repolho, cenoura, fruta',
      id: 7,
      meal: 'janta',
    },
    {
      day: 'Quinta',
      dish: 'carne de figado, repolho, cenoura, fruta',
      id: 8,
      meal: 'janta',
    },
    {
      day: 'Sexta',
      dish: 'carne de figado, repolho, cenoura, fruta',
      id: 9,
      meal: 'janta',
    },
  ])

  const [selectedMenu, setSelectedMenu] = useState<{
    dish: string
    day: string
    meal: string
    id: number
  }>({ dish: '', day: '', meal: '', id: 500 })

  async function updatePlate(
    dish: { dish: string; day: string; meal: string; id: number },
    snack: string
  ) {
    const index = allDishes.findIndex((dishFind) => dishFind == dish)
    allDishes[index] = await { ...dish, dish: snack }
    setAllDishes([...allDishes])
  }

  // function deleted(dish: {dish: string, day: string}) {
  //   console.log(`Deletando ... ${dish.dish}`)
  //   console.log(`Deletando ... ${dish.day}`)
  // }

  // function deletedLunch(dish: {dish: string, day: string}) {
  //   console.log(`Deletando ... ${dish.dish}`)
  //   console.log(`Deletando ... ${dish.day}`)
  // }

  return {
    allDishes,
    selectedDish: selectedMenu,
    setSelectedDish: setSelectedMenu,
    updatePlate,
    // deleted
  }
}
