export default class DishMenu {
  #dish: string

  constructor(dish: string) {
    this.#dish = dish
  }

  static empty() {
    return new DishMenu('')
  }

  get dish() {
    return this.#dish
  }
}
