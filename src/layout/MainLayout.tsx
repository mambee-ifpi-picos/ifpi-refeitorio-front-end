import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainLayoutProps from './MainLayoutProps'
import Sidebar from '../components/Sidebar'
import TempMessage from '../components/TempMessage'
import { useGlobalContext } from '../store'

export default function MainLayout(props: MainLayoutProps) {
  const { tempMessage } = useGlobalContext()

  // console.log(props)
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

      <div>
        {tempMessage.message && <TempMessage />}
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Navbar />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-xl-2">
              <Sidebar />
            </div>
            <div className=" col-lg-10 ps-4 col-xl-10">
              <main className="text-center">{props.children}</main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
