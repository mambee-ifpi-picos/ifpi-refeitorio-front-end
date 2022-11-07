import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout title="Refeitório IFPI Picos">
      <h1 className={styles.title}>Refeitório IFPI Picos</h1>
      <p className={styles.title}>
        Sistema de gerenciamento de refeitórios do IFPI - Picos - 2022
      </p>
    </MainLayout>
  )
}

export default Home
