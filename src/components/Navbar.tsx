import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Link from 'next/link'
import style from '../styles/Home.module.css'

function Navbar() {
  return (
    <nav className={`border-bottom shadow-sm fixed-top ${style.BG}`}>
      <div className="container   ">
        <div className="d-flex flex-wrap align-items-center justify-content-between p-1 ">
          <button
            className="btn border align-items-center  text-white text-bg-dark d-flex gap-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <i className="bi bi-list "></i>
          </button>
          <div className="d-flex gap-4 align-items-center">
            <Link href="/">
              <a className="navbar-brand fw-bold fs-2">Refeitório</a>
            </Link>
          </div>

          <div className="dropdown text-end ">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person h4"></i>
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
