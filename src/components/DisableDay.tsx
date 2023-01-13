export default function DisableDay() {
  return (
    <div>
      <div className="dropdown py-1">
        <button
          className="btn shadow-sm border dropdown-toggle btn-light btn-sm"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-slash-circle h5"></i>
        </button>

        <ul className="dropdown-menu px-3">
          <li>
            <div className="form-check form-switch form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckReverse"
              />
              <label
                className="form-check-label text-nowrap  text-start"
                htmlFor="flexSwitchCheckReverse"
              >
                Desativa Dia:
              </label>
            </div>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <div className="form-check">
              <input
                className="form-check-input p-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Feriado
              </label>
            </div>
          </li>
          <li>
            <div className="form-check">
              <input
                className="form-check-input p-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Facultativo
              </label>
            </div>
          </li>
          <hr className="dropdown-divider" />
          <li>
            <div className="">
              <input
                className="form-check-input p-2"
                type="radio"
                name="flexRadioDefault"
                id="exampleDataList"
              />
              <label htmlFor="exampleDataList" className="form-label mx-1">
                Outro
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Digite..."
              />
              <datalist id="datalistOptions">
                <option value="Feriado Prolongado" />
                <option value="Férias" />
                <option value="Carnaval" />
                <option value="Copa do Mundo" />
                <option value="Fechado" />
              </datalist>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
