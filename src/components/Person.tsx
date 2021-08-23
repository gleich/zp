/* eslint-disable @next/next/no-img-element */
import styles from '@styles/components/Person.module.css'

export default function Person({
  name,
  description,
  metBy,
  location,
  metOn,
}: {
  name: string
  description: string
  metBy?: string
  location?: string
  metOn?: string
}) {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2>{name}</h2>
        <h4>{description}</h4>
        <ul>
          <li>{'Met by: ' + (metBy != null ? metBy : 'Everyone')}</li>
          {location != null ? <li>Met in: {location}</li> : null}
          {metOn != null ? <li>Met on: {metOn}</li> : null}
        </ul>
      </div>
    </main>
  )
}
