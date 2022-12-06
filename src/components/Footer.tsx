import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import style from '../styles/Home.module.css'

function Footer() {
  return (
    <footer className={`fixed-bottom border border-0  `}>
      <a
        href="https://mambeeifpi.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-center ${style.linkFooter} ${style.BGFooter} p-3`}
      >
        Copyright 2022 - Mambee | IFPI - Campus Piauí | Todos os direitos
      </a>
    </footer>
  )
}

export default Footer
