import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  const names = 'Nome Recebido do Banco de Dados'
  const name = names.split(' ')

  return (
    <div className="py-2">
      <Link href="./">
        <button className="accordion-button gap-2 " type="button">
          <Image
            className="shadow-sm rounded-circle"
            src="/img/profile.jpg"
            width={50}
            height={50}
            alt="Foto de Perfil"
          />
          <div className="d-flex fs-5 flex-column ">
            <span className="fw-bolder ">{name[0]}</span>
            <p className="fs-6 text-uppercase m-0 lead">
              <small>admin/aluno</small>
            </p>
          </div>
        </button>
      </Link>
    </div>
  )
}
