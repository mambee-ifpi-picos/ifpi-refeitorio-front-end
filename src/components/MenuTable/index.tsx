import style from '../../styles/Home.module.css'
import { Item } from '../../types/Items'
import { useGlobalContext } from '../../store'
import Loading from '../Loading'
import ButtonActions from './ButtonActions'
import listDaysOfWeek from '../../utils/dates/listDaysOfWeek'
import { format } from 'date-fns'
import { Menu } from '../../types/Menus'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

type MenuTablePropsType = {
  title: string
  meal: string
  editedDish?: (dish: Item) => void
  deletedDish?: (dish: Item) => void
  loading: boolean
}

function Table({ title, meal, loading }: MenuTablePropsType) {
  const router = useRouter()
  const [mostrarAcao, setMostrarAcao] = useState(true)

  useEffect(() => {
    // Verificar o caminho (URL) da página atual
    if (router.pathname === '/student/menuStudents') {
      setMostrarAcao(false)
    } else {
      setMostrarAcao(true)
    }
  }, [router.pathname])

  const { desiredWeek, listAllMenus, listNameDays, setSelectedMenu } =
    useGlobalContext()
  const listDays = listDaysOfWeek({ desiredWeek })
  const menus = listAllMenus?.filter((dish) => dish.meal === meal)

  const finalList = listDays.map((day) => {
    const existMenuInThisDate = menus?.find(
      (menu) => new Date(menu.date).getDay() === day.getDay()
    )
    const menuStructure: Menu = {
      date: format(day, 'uuuu-MM-dd'),
      meal,
      items: [],
    }
    const response = existMenuInThisDate ?? menuStructure
    return response
  })

  // MENSAGEM DE QUE NÃO HÁ MENU PARA O DIA

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
            {mostrarAcao && (
              <th className="text-center" colSpan={1}>
                Ação
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {listNameDays.map((day, index) => {
            return (
              <tr key={index} className="shadow border border-secondary">
                <th
                  scope="row"
                  colSpan={1}
                  className="fw-bold text-nowrap border border-dark text-center border-opacity-50"
                >
                  <p className="m-0">{listNameDays[index]}</p>
                  <p className="m-0">
                    {listDays[index].toLocaleDateString('pt-BR')}
                  </p>
                </th>

                <td
                  colSpan={4}
                  className="text-center fs-6 text-uppercase w-100 text-wrap"
                >
                  {loading ? (
                    <Loading />
                  ) : (
                    finalList[index].items?.map((item, itemIndex) => (
                      <span key={itemIndex}>
                        {item.name}
                        {itemIndex !== finalList[index].items.length - 1 &&
                          ' - '}
                      </span>
                    ))
                  )}
                </td>

                {mostrarAcao && (
                  <td
                    scope="col"
                    colSpan={1}
                    className="d-md-flex w-100 text-center py-2 gap-2 justify-content-evenly align-items-center"
                  >
                    <ButtonActions
                      onClick={() => {
                        setSelectedMenu(finalList[index])
                      }}
                    />
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
