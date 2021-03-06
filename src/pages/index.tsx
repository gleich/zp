import styles from '@styles/pages/Home.module.css'
import Meta from '@components/Meta'
import Button from '@components/Button'

export default function Home() {
  return (
    <div>
      <Meta title="Zephyr People" />
      <body className={styles.body}>
        <div className={styles.title}>
          <h1 className={styles.titleWord}>Zephyr</h1>
          <h1 className={styles.titleWord}>People</h1>
        </div>
        <div className={styles.buttons}>
          <Button text="👋 Meet em'" url="/meet" />
          <Button text="📊 Visualize Connections" url="/visual" />
          <Button text="📬 Submit" url="/submit" />
        </div>
      </body>
    </div>
  )
}
