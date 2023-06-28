import { ReactNode } from 'react'
import style from '../styles/Home.module.css'

interface SingleModalProps {
  id: string
  modalTitle: string
  children: ReactNode
  action: string
  onClickSuccess?: () => void
  onClickCancel?: () => void
}

export default function SingleModal(props: SingleModalProps) {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={`modal-header ${style.BG}`}>
            <h4
              className="modal-title fw-semibold text-light"
              id="exampleModalLabel"
            >
              {props.modalTitle}
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={props.onClickCancel}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={props.onClickSuccess}
            >
              {props.action}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
