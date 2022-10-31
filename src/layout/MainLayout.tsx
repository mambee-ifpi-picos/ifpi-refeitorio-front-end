import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import MainLayoutProps from './MainLayoutProps'

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
      </Head>

      <div className={styles.page}>
        <Navbar />

        <main className="container">{props.children}</main>

        <Footer />
      </div>
    </div>
  )
}
