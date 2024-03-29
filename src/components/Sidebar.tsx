import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Link from 'next/link'
import style from '../styles/Home.module.css'
import Profile from './Profile'
import { useState, useEffect } from 'react'

function Sidebar() {
  const [sidebarAberto, setSidebarAberto] = useState(false)

  useEffect(() => {
    function handleRedimensionamento() {
      if (window.innerWidth >= 769) {
        setSidebarAberto(true)
      } else {
        setSidebarAberto(false)
      }
    }

    handleRedimensionamento() // Verificar tamanho da tela inicialmente

    window.addEventListener('resize', handleRedimensionamento)

    return () => {
      window.removeEventListener('resize', handleRedimensionamento)
    }
  }, [])

  return (
    <nav className={`position-absolute`}>
      <div
        className={`offcanvas ${sidebarAberto && 'show'} ${
          !sidebarAberto && 'w-100'
        }  ${style.BGSidebar} border border-0 offcanvas-start   `}
        style={{ width: '200px' }}
        tabIndex={-1}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <ul className="list-group  list-group-flush">
          <li className="list-group-item  border-end shadow-sm ">
            <Profile />
          </li>
          <li className="list-group-item bg-dark bg-gradient text-white">
            <Link href=".././">
              <button
                className="accordion-button text-nowrap  gap-2"
                type="button"
              >
                <i className="bi bi-columns fs-4 m-1"></i>
                Painel de Controle
              </button>
            </Link>
          </li>
        </ul>
        <div className="offcanvas-body text-start p-0 ">
          <div className="accordion">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button collapsed gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <i className="bi bi-book fs-4"></i>
                  Acadêmico
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <Link href="/student/menuStudents">
                        <a className="nav-link">Cardápios</a>
                      </Link>
                    </li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <i className="bi bi-clipboard-check fs-4"></i>
                  Relátorios
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed gap-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <i className="bi bi-cup-hot fs-4"></i>
                  Refeitório
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body  ">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex gap-2">
                      <Link href="/menu">
                        <a className="nav-link">Cardápio</a>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex">
                      <Link href="/itens">
                        <a className="nav-link">Itens</a>
                      </Link>
                    </li>
                    <li className="list-group-item text-start d-flex">
                      <Link href="/menu-history">
                        <a className="nav-link">Histórico de Cardápios</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
