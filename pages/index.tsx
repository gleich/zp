import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Meta } from './components/meta'

export default function Home() {
  return (
    <div>
      <Meta title="zpl" />
      <body className={styles.body}></body>
    </div>
  )
}
