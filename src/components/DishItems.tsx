import useItems from '../hooks/useItems'

export default function DishItems() {
  const { listItems } = useItems()

  function itemsList() {
    return listItems?.map((item) => {
      return (
        <>
          <input
            type="checkbox"
            className="btn-check"
            id={item.name}
            autoComplete="off"
          />
          <label className="btn m-2 btn-outline-success" htmlFor={item.name}>
            {item.name}
          </label>
        </>
      )
    })
  }
  return (
    <div>
      <div>
        <h5 className="text-start pb-3">Selecione os Items do Prato:</h5>
      </div>
      <div className="justify-content-evenly">{itemsList()}</div>
    </div>
  )
}
