// import useItems from '../hooks/useItems'
import { useState, useEffect } from 'react'

export default function DishItems() {
  // const { listItems } = useItems()

  function Items() {
    const [users, setUsers] = useState<
      | { id: number; name: string; active: boolean; creationDate: string }[]
      | null
    >()
    const [isLoading, setLoading] = useState(false)
    const linkRoot = 'http://localhost:3000'

    useEffect(() => {
      setLoading(true)

      fetch(`${linkRoot}/items`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data)
          console.log(data)
          setLoading(false)
        })
    }, [])

    if (isLoading)
      return (
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    if (!users) return <p>No profile data</p>

    return (
      <>
        {users.map((user) => (
          <>
            <input
              type="checkbox"
              className="btn-check"
              id={user.name}
              autoComplete="off"
            />
            <label className="btn m-2 btn-outline-success" htmlFor={user.name}>
              {user.name}
            </label>
          </>
        ))}
      </>
    )
  }

  // function itemsList() {
  //   return listItems?.map((item) => {
  //     return (
  //       <>
  //         <input
  //           type="checkbox"
  //           className="btn-check"
  //           id={item.name}
  //           autoComplete="off"
  //         />
  //         <label className="btn m-2 btn-outline-success" htmlFor={item.name}>
  //           {/* {Items()} */}
  //           {/* {item.name} */}
  //         </label>
  //       </>
  //     )
  //   })
  // }
  return (
    <div>
      <div>
        <h5 className="text-start pb-3">Selecione os Items do Prato:</h5>
      </div>
      <div className="justify-content-evenly">{Items()}</div>
    </div>
  )
}
