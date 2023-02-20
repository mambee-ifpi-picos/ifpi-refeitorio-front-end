import { useState } from 'react'

// const dishesDinnerDefault = [
//   {
//     day: 'Segunda',
//     dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
//     id: 0
//   },
//   {
//     day: 'Terça',
//     dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
//     id: 1
//   },
//   {
//     day: 'Quarta',
//     dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
//     id: 2
//   },
//   {
//     day: 'Quinta',
//     dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
//     id: 3
//   },
//   {
//     day: 'Sexta',
//     dish: 'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta',
//     id: 4
//   },
// ]

// const dishesLunchDefault = [
//   {
//     day: 'Segunda',
//     dish: 'carne de figado, repolho, cenoura, fruta',
//     id: 5
//   },
//   {
//     day: 'Terça',
//     dish: 'carne de figado, repolho, cenoura, fruta',
//     id: 6
//   },
//   {
//     day: 'Quarta',
//     dish: 'carne de figado, repolho, cenoura, fruta',
//     id: 7
//   },
//   {
//     day: 'Quinta',
//     dish: 'carne de figado, repolho, cenoura, fruta',
//     id: 8
//   },
//   {
//     day: 'Sexta',
//     dish: 'carne de figado, repolho, cenoura, fruta',
//     id: 9
//   },
// ]

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
  const [selectedDish, setSelectedDish] = useState<{
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

  // const [dishes, setDishes] = useState(dishesDinnerDefault)

  // const [selectedDishLunch, setSelectedDishLunch] = useState<{dish: string, day: string}>({dish: '', day: ''})
  // const [dishesLunch, setDishesLunch] = useState(dishesLunchDefault)

  // function deleted(dish: {dish: string, day: string}) {
  //   console.log(`Deletando ... ${dish.dish}`)
  //   console.log(`Deletando ... ${dish.day}`)
  // }

  // function updatePlate(dish: {dish: string, day: string}) {
  //   console.log('savePlate', dish.dish)
  //   dishes.filter((d) => d.day === dish.day).map((d) => (d.dish = dish.dish))
  //   setDishes([...dishes])
  // }

  // function deletedLunch(dish: {dish: string, day: string}) {
  //   console.log(`Deletando ... ${dish.dish}`)
  //   console.log(`Deletando ... ${dish.day}`)
  // }

  // function updatePlateLunch(dish: {dish: string, day: string}) {
  //   console.log('savePlate', dish.dish)
  //   dishesLunch
  //     .filter((d) => d.day === dish.day)
  //     .map((d) => (d.dish = dish.dish))
  //   setDishesLunch([...dishesLunch])
  // }

  return {
    allDishes,
    selectedDish,
    setSelectedDish,
    updatePlate,
    // dishes,
    // updatePlate,
    // deleted,

    // selectedDishLunch,
    // setSelectedDishLunch,
    // dishesLunch,
    // updatePlateLunch,
    // deletedLunch,
  }
}
