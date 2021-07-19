import styles from '@styles/pages/Home.module.css'
import Meta from '@components/Meta'
import Button from '@components/Button'

export default function Home() {
  return (
    <div>
      <Meta title="zpl" />
      <body className={styles.body}>
        <div className={styles.title}>
          <h1 className={styles.titleWord}>Zephyr</h1>
          <h1 className={styles.titleWord}>People</h1>
          <h1 className={styles.titleWord}>Log</h1>
        </div>
        <div>
          <Button text="Submit" />
        </div>
      </body>
    </div>
  )
}
