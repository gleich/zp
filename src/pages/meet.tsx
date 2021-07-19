import styles from '@styles/pages/Meet.module.css'
import Meta from '@components/Meta'

export default function Meet() {
  return (
    <div>
      <Meta title="Meet em'" />
      <body className={styles.body}>
        <h1>Meet em&apos;</h1>
        <p>
          Meet all the cool people we&apos;ve seen along the{' '}
          <a href="https://zephyr.hackclub.com">Zephyr hackclub trip.</a>
        </p>
      </body>
    </div>
  )
}
