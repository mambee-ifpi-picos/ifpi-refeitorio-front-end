import { useState } from 'react'
import DishMenu from '../core/DishMenu'

const dishesLunchDefault = [
  new DishMenu('Acompanhamentos', 'arroz, feijao, macarrao'),
  new DishMenu('Prato Principal', 'carne de figado'),
  new DishMenu('Salada', 'repolho, cenoura'),
  new DishMenu('Sopa', 'batata'),
  new DishMenu('Sobremesa', 'melancia'),
]

export default function useDishesDinner() {
  // Tabela da Janta

  const [selectedDishLunch, setSelectedDishLunch] = useState<DishMenu>(
    DishMenu.empty()
  )
  const [dishesLunch, setDishesLunch] = useState(dishesLunchDefault)

  function dishSelectedLunch(dish: DishMenu) {
    setSelectedDishLunch(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deletedLunch(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function updatePlateLunch(dish: DishMenu) {
    console.log('savePlate', dish.dish)
    dishesLunch
      .filter((d) => d.day === dish.day)
      .map((d) => (d.dish = dish.dish))
    setDishesLunch([...dishesLunch])
  }
  return {
    selectedDishLunch,
    setSelectedDishLunch,
    dishesLunch,
    dishSelectedLunch,
    deletedLunch,
    updatePlateLunch,
  }
}
