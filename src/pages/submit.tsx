import Meta from '@components/Meta'
import styles from '@styles/pages/Submit.module.css'

export default function Submit() {
  return (
    <div>
      <Meta title="Submit" />
      <body className={styles.body}>
        <h1>Submit</h1>
        <form action="submitted log" method="post"></form>
      </body>
    </div>
  )
}
