import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Refeitório</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link href="/menu">
                <a className="nav-link">Cardápio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
