import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'

const MenuHistory: NextPage = () => {
  return (
    <MainLayout title="Histórico de Cardápios">
      <h1 className={styles.title}>Histórico de Cardápios</h1>
    </MainLayout>
  )
}

export default MenuHistory
