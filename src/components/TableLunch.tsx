import style from '../styles/Home.module.css'
import { addDays, eachDayOfInterval, startOfWeek } from 'date-fns'
import DisableDay from './DisableDay'

interface TableLunchProps {
  plates: { dish: string; day: string; meal: string; id: number }[]
  title: string
  editedDish?: (dish: {
    dish: string
    day: string
    meal: string
    id: number
  }) => void
  deletedDish?: (dish: {
    dish: string
    day: string
    meal: string
    id: number
  }) => void
}

export const days = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
]

export function daysAll() {
  const today = startOfWeek(new Date(), { weekStartsOn: 1 })
  const aWeekFromNow = addDays(today, 4)
  const thisWeek = eachDayOfInterval({
    start: today,
    end: aWeekFromNow,
  })
  return thisWeek
}

function renderdateDays() {
  return daysAll().map((day, i) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <>
        {days[i]}
        <br />
        {day.toLocaleDateString('pt-BR')}
      </>
    )
  })
}
// function chekboxHolidays() {
//   const CheckSwitch = () => {
//     const input = document.getElementById('flexSwitchCheckReverse') as HTMLInputElement
//     return input.checked
//   }
//   return CheckSwitch()
// }

function TableLunch(props: TableLunchProps) {
  // const [dishes, setDishes] = useState(props.plates.filter(dish => dish.meal === 'almoço'))

  function renderHeader() {
    return (
      <>
        <tr className={`${style.BG}  shadow-sm`}>
          <th scope="row" className="text-center" colSpan={6}>
            <span className="fs-4">{props.title}</span>
          </th>
        </tr>
        <tr className="bg-dark h6 text-wrap bg-gradient align-middle text-light shadow-sm">
          <th className="text-center" colSpan={1}>
            Dia
          </th>
          <th className="text-center" colSpan={4}>
            Prato
          </th>
          {/* {renderdateDays()} */}
          <th className="text-center" colSpan={1}>
            Ação
          </th>
        </tr>
      </>
    )
  }

  // function renderData() {
  //   return dishes.map((dish, i) => {
  //     return (
  //       <>
  //         <tr key={dish.id} className="shadow border border-secondary ">
  //           <th
  //             scope="row"
  //             colSpan={1}
  //             className="fw-bold border border-dark text-center border-opacity-50"
  //           >
  //             {renderdateDays()[i]}
  //           </th>
  //           <td colSpan={4} className="text-center text-wrap">
  //             {dish.dish}
  //           </td>
  //           <td
  //             scope="col"
  //             colSpan={1}
  //             className="d-md-flex text-center py-2 justify-content-evenly align-items-center"
  //           >
  //             {renderActions(dish)}
  //           </td>
  //         </tr>
  //       </>
  //     )
  //   })
  // }

  function renderActions(dish: {
    dish: string
    day: string
    meal: string
    id: number
  }) {
    return (
      <>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModalToggleLunch"
          onClick={() => props.editedDish?.(dish)}
          className="btn shadow-sm border btn-success"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        {DisableDay()}
        {/* <button
          onClick={() => props.deletedDish?.(dish)}
          className="btn shadow-sm border ms-2 btn-sm"
        >
        </button> */}
      </>
    )
  }

  return (
    <div className="table-responsive-lg pb-4 rounded">
      <table className="table align-middle border overflow-hidden rounded-top caption-top shadow table-bordered text-start table-hover ">
        <thead>{renderHeader()}</thead>
        {/* <tbody>{renderData()}</tbody> */}
        <tbody>
          {props.plates
            .filter((dish) => dish.meal === 'almoço')
            .map((dish, i) => {
              return (
                <>
                  <tr key={dish.id} className="shadow border border-secondary ">
                    <th
                      scope="row"
                      colSpan={1}
                      className="fw-bold border border-dark text-center border-opacity-50"
                    >
                      {renderdateDays()[i]}
                    </th>
                    <td colSpan={4} className="text-center text-wrap">
                      {dish.dish}
                    </td>
                    <td
                      scope="col"
                      colSpan={1}
                      className="d-md-flex text-center py-2 justify-content-evenly align-items-center"
                    >
                      {renderActions(dish)}
                    </td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TableLunch
