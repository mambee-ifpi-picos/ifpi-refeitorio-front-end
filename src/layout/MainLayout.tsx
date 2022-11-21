import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import MainLayoutProps from './MainLayoutProps'
import Sidebar from '../components/Sidebar'

export default function MainLayout(props: MainLayoutProps) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>{props.title ?? 'Refeitório IFPI Picos'}</title>
        <meta
          name="description"
          content="Sistema de gerenciamento de refeitórios do IFPI"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      <div className={styles.page}>
        <Navbar />
        <Sidebar />
        <div className="row">
          <div className="col-lg-3" />
          <div className="col text-center">
            <main className="container pb-4 text-center ">
              {props.children}
            </main>
          </div>
          <div className="col-xl-2 col-lg-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
