// import useItems from '../hooks/useItems'
import { useEffect } from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../store'

export default function DishItems({ loading }: { loading: boolean }) {
  const { listItems, selectedMenu } = useGlobalContext()

  useEffect(() => {
    console.log(selectedMenu)
  }, [selectedMenu])

  // function Items() {
  //   const [users, setUsers] = useState<
  //     | { id: number; name: string; active: boolean; creationDate: string }[]
  //     | null
  //   >()
  //   const [isLoading, setLoading] = useState(false)
  //   const linkRoot = 'http://localhost:3000'

  //   useEffect(() => {
  //     setLoading(true)

  //     fetch(`${linkRoot}/items`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data)
  //         // console.log(data)
  //         setLoading(false)
  //       })
  //   }, [])

  //   if (isLoading) return Loading()
  //   if (!users) return <p>No profile data</p>

  //   return (
  //     <>
  //       {users.map((user) => (
  //         <>
  //           <input
  //             type="checkbox"
  //             className="btn-check"
  //             id={user.name}
  //             autoComplete="off"
  //           />
  //           <label className="btn m-2 btn-outline-success" htmlFor={user.name}>
  //             {user.name}
  //           </label>
  //         </>
  //       ))}
  //     </>
  //   )
  // }

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
      <div className="justify-content-evenly">
        {loading && <Loading />}
        {!loading &&
          typeof listItems === 'object' &&
          listItems?.length &&
          listItems.map((item) => (
            <>
              <input
                type="checkbox"
                className="btn-check"
                id={item.name}
                autoComplete="off"
                checked={
                  selectedMenu?.items?.find(
                    (itemMenu) => itemMenu.id === item.id
                  ) && true
                }
              />
              <label
                className="btn m-2 btn-outline-success"
                htmlFor={item.name}
              >
                {item.name}
              </label>
            </>
          ))}
      </div>
    </div>
  )
}
