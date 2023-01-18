import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Link from 'next/link'
import style from '../styles/Home.module.css'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className={`border-bottom shadow-sm px-3 fixed-top  ${style.BG}`}>
      <div className="">
        <div className="d-flex flex-row align-items-center justify-content-between ">
          <div className="d-flex gap-3">
            <h4
              className="offcanvas-title  align-self-center"
              id="offcanvasResponsiveLabel"
            >
              <div className="d-flex align-items-center">
                <Link href="/">
                  <a
                    className={`navbar-brand ${style.linkRefectory} fw-bold fs-2`}
                  >
                    <Image
                      className="shadow-sm"
                      src="/img/r.png"
                      width={25}
                      height={25}
                      alt="Foto de Perfil"
                    />
                    efeitório
                  </a>
                </Link>
              </div>
            </h4>
            <div className="align-self-center my-2">
              <button
                className={`btn border align-items-center text-white btn-dark d-flex`}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-controls="offcanvasResponsive"
              >
                <i className="bi bi-list fs-6  align-self-center"></i>
              </button>
            </div>
          </div>

          <div className="dropdown text-end px-3">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person h4 text-light"></i>
            </a>
            <ul className="dropdown-menu shadow text-small">
              <li>
                <a className="dropdown-item" href="#">
                  Perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ajustes
                </a>
              </li>
              <li>
                <Link href="/about">
                  <a className="dropdown-item">Sobre</a>
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#"></a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item" href="#">
                    Sair
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// <nav className="navbar fixed-top navbar-expand-lg bg-light">
//       <div className="container-fluid">
// <Link href="/">
//   <a className="navbar-brand">Refeitório</a>
// </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="me-auto mb-2 mb-lg-0"></ul>
//           <ul className="navbar-nav d-flex">
//             <li className="nav-item">
// <Link href="/menu">
//   <a className="nav-link">Cardápio</a>
// </Link>
//             </li>
//             <li className="nav-item">
// <Link href="/about">
//   <a className="nav-link">Sobre</a>
// </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/">
//                 <a className="nav-link">Sair</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
