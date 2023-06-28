import DisableDay from './DisableDay'

export default function ButtonActions({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#idModalEditMenu"
        onClick={onClick}
        className="btn shadow-sm border btn-success"
        title="Editar Cardápio"
      >
        <i className="bi bi-pencil-square"></i>
      </button>
      <DisableDay />
    </>
  )
}

{
  /* <div class="modal fade" style="display: none;" aria-hidden="true"> */
}

{
  /* <div class="modal fade show" style="display: block;" aria-modal="true" role="dialog"> */
}
