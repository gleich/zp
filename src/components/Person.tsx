/* eslint-disable @next/next/no-img-element */
import styles from '@styles/components/Person.module.css'

export default function Person({
  name,
  description,
  meetBy,
  location,
  meetOn,
}: {
  name: string
  description: string
  meetBy?: string
  location?: string
  meetOn?: string
}) {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2>{name}</h2>
        <h4>{description}</h4>
        <ul>
          <li>{'Meet by: ' + (meetBy != null ? meetBy : 'Everyone')}</li>
          {location != null ? <li>Meet in: {location}</li> : null}
          {meetOn != null ? <li>Meet on: {meetOn}</li> : null}
        </ul>
      </div>
    </main>
  )
}
