// interface MenuInputProps {
//     text: string
//     value: string
// }
export default function MenuInput() {
  return (
    <div className="mb-3">
      <label
        htmlFor="exampleFormControlTextarea1"
        className="d-flex form-label"
      >
        Descrição
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        // rows="8"
      ></textarea>
    </div>
  )
}
