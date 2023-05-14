import DisableDay from './DisableDay'

export default function ButtonActions({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#idModalEditMenu"
        onClick={onClick}
        className="btn shadow-sm border btn-success"
      >
        <i className="bi bi-pencil-square"></i>
      </button>
      <DisableDay />
    </>
  )
}
