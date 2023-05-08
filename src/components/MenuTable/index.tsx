import style from '../../styles/Home.module.css'
import { Item } from '../../types/Items'
import { useGlobalContext } from '../../store'
import Loading from '../Loading'
import ButtonActions from './ButtonActions'
import listDaysOfWeek from '../../utils/dates/listDaysOfWeek'

type MenuTablePropsType = {
  title: string
  meal: string
  editedDish?: (dish: Item) => void
  deletedDish?: (dish: Item) => void
  loading: boolean
}

function Table({ title, meal, loading }: MenuTablePropsType) {
  const { desiredWeek, listAllMenus, listNameDays } = useGlobalContext()
  const listDays = listDaysOfWeek({ desiredWeek })
  const menus = listAllMenus?.filter((dish) => dish.meal === meal)

  const finalList = listDays.map((day) => {
    const existMenuInThisDate = menus?.find(
      (menu) => new Date(menu.date).getDay() === day.getDay()
    )
    const response = existMenuInThisDate ?? null
    return response
  })

  // PAREI NA PARTE DE MOSTRAR OS ITENS / MENSAGEM DE QUE NÃO HÁ MENU PARA O DIA

  return (
    <div className="table-responsive-lg pb-5 mb-4 rounded">
      <table className="table align-middle border overflow-hidden rounded-top caption-top shadow table-bordered text-start table-hover">
        <thead>
          <tr className={`${style.BG} shadow-sm`}>
            <th scope="row" className="text-center" colSpan={6}>
              <span className="fs-4">{title}</span>
            </th>
          </tr>
          <tr className="bg-dark h6 text-wrap bg-gradient align-middle text-light shadow-sm">
            <th className="text-center" colSpan={1}>
              Dia
            </th>
            <th className="text-center" colSpan={4}>
              Prato
            </th>
            <th className="text-center" colSpan={1}>
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {listNameDays.map((day, index) => {
            return (
              <tr key={index} className="shadow border border-secondary">
                <th
                  scope="row"
                  colSpan={1}
                  className="fw-bold border border-dark text-center border-opacity-50"
                >
                  <p className="m-0">{listNameDays[index]}</p>
                  <p className="m-0">
                    {listDays[index].toLocaleDateString('pt-BR')}
                  </p>
                </th>
                <td colSpan={4} className="text-center text-wrap">
                  {loading && <Loading />}
                  {/* {menus && menus.length > 0 && menus.map((menu) => {
                    if(isEqual(new Date(listDays[index]), new Date(menu.date))) {
                      return 'tem refeição esse dia'
                    } else{
                      return ''
                    } 
                  })} */}
                  {finalList[index]?.items.map((item) => `${item.name} `)}
                </td>
                <td
                  scope="col"
                  colSpan={1}
                  className="d-md-flex text-center py-2 justify-content-evenly align-items-center"
                >
                  {/* <ButtonActions editedDish={editedDish} /> */}
                  <ButtonActions />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
