import styles from '@styles/pages/Meet.module.css'
import Meta from '@components/Meta'
import Person from '@components/Person'

export default function Meet() {
  return (
    <div>
      <Meta title="Meet em'" />
      <body className={styles.body}>
        <h1 className={styles.title}>Meet em&apos;</h1>
        <h3>
          Meet all the cool people we&apos;ve seen along the{' '}
          <a href="https://zephyr.hackclub.com">Zephyr hackclub trip.</a>
        </h3>
        <Person name="Mr. Test" description="A very cool person" />
      </body>
    </div>
  )
}
