import { useState } from 'react'
import DishMenu from '../core/DishMenu'

const dishesDinnerDefault = [
  new DishMenu('Acompanhamentos', 'arroz, feijao, macarrao'),
  new DishMenu('Prato Principal', 'carne de figado'),
  new DishMenu('Salada', 'repolho, cenoura'),
  new DishMenu('Sopa', 'batata'),
  new DishMenu('Sobremesa', 'melancia'),
]
export default function useDishesDinner() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const [selectedDish, setSelectedDish] = useState<DishMenu>(DishMenu.empty())
  const [dishes, setDishes] = useState(dishesDinnerDefault)

  function dishSelected(dish: DishMenu) {
    setSelectedDish(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deleted(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function updatePlate(dish: DishMenu) {
    console.log('savePlate', dish.dish)
    dishes.filter((d) => d.day === dish.day).map((d) => (d.dish = dish.dish))
    setDishes([...dishes])
  }
  return {
    visible,
    setVisible,
    selectedDish,
    dishes,
    dishSelected,
    deleted,
    updatePlate,
  }
}
