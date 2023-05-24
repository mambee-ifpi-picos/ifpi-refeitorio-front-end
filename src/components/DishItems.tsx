import { useEffect } from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../store'

export default function DishItems({ loading }: { loading: boolean }) {
  const {
    listItems,
    selectedMenu,
    listItemsToInterate,
    setListItemsToInterate,
  } = useGlobalContext()

  // const [listItemsToInterate, setListItemsToInterate] = useState<{checked: boolean, item: Item}[] | undefined>(listItems?.length ? listItems.map((item) => {
  //   return {
  //     item,
  //     checked: selectedMenu?.items.find(itemMenu => itemMenu.id == item.id) ? true : false
  //   }
  // }) : undefined)

  useEffect(() => {
    setListItemsToInterate(
      listItems?.length
        ? listItems.map((item) => {
            return {
              item,
              checked: selectedMenu?.items.find(
                (itemMenu) => itemMenu.id == item.id
              )
                ? true
                : false,
            }
          })
        : undefined
    )
  }, [listItems, selectedMenu])

  return (
    <div>
      <div>
        <h5 className="text-start pb-3">Selecione os Items do Prato:</h5>
      </div>
      <div className="justify-content-evenly">
        {loading ? (
          <Loading />
        ) : listItemsToInterate?.length ? (
          listItemsToInterate.map((item) => (
            <>
              <input
                type="checkbox"
                className="btn-check"
                id={item.item.name}
                autoComplete="off"
                onClick={() =>
                  setListItemsToInterate((interateList) =>
                    interateList?.map((interateListItem) =>
                      interateListItem == item
                        ? {
                            ...interateListItem,
                            checked: !interateListItem.checked,
                          }
                        : interateListItem
                    )
                  )
                }
                checked={item.checked}
              />
              <label
                className="btn m-2 btn-outline-success"
                htmlFor={item.item.name}
              >
                {item.item.name}
              </label>
            </>
          ))
        ) : (
          <p className="fw-bold opacity-50">Não existem itens cadastrados.</p>
        )}
      </div>
    </div>
  )
}
