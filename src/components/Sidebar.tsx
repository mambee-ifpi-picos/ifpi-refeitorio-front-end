import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Link from 'next/link'
import style from '../styles/Home.module.css'

function Sidebar() {
  return (
    <nav className="  ">
      <div
        className={`offcanvas show d-lg-block ${style.BGSidebar} border border-0 offcanvas-start w-auto  `}
        tabIndex={-1}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div
          className={`offcanvas-header ${style.BG} align-items-center p-2 justify-content-evenly `}
        >
          <i className="bi bi-r-square-fill h2 m-0"></i>
          <h4 className="offcanvas-title " id="offcanvasResponsiveLabel">
            Menu
          </h4>
          <div className="">
            <button
              className="btn border d-lg-none  align-items-center  text-white text-bg-dark d-flex gap-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
            >
              <i className="bi bi-list "></i>
            </button>
          </div>
        </div>
        <ul className="list-group  list-group-flush">
          <li className="list-group-item bg-dark bg-gradient text-white">
            <Link href="./">
              <button className="accordion-button  gap-2" type="button">
                <i className="bi bi-columns fs-4 m-1"></i>
                Painel de Controle
              </button>
            </Link>
          </li>
        </ul>
        <div className="offcanvas-body p-0 ">
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
                    <li className="list-group-item">A second item</li>
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
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
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
