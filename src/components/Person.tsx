/* eslint-disable @next/next/no-img-element */
import styles from '@styles/components/Person.module.css'

export default function Person({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <main className={styles.main}>
      <img src="test.jpg" alt={name} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <h4>{description}</h4>
      </div>
    </main>
  )
}
