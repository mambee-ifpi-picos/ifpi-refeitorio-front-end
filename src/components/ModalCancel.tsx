export default function ModalCancel() {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Deseja cancelar as Alterações?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLunch"
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Retorna
              </button>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                type="button"
                className="btn btn-outline-danger"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
