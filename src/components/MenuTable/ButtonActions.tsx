import DisableDay from './DisableDay'

// type PropsButtonActionsType = {
//   editedDish: any,
//   dish?: any
// }

export default function ButtonActions() {
  //   {
  //   editedDish,
  //   dish
  // }: PropsButtonActionsType
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggleLunch"
        // onClick={() => editedDish?.(dish)}
        className="btn shadow-sm border btn-success"
      >
        <i className="bi bi-pencil-square"></i>
      </button>
      <DisableDay />
    </>
  )
}
