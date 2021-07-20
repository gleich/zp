import styles from '@styles/pages/Submit.module.css'
import Meta from '@components/Meta'

export default function Submit() {
  return (
    <div>
      <Meta title="Submit" />
      <body className={styles.main}>
        <h1>Submit</h1>
        <p className={styles.msg}>
          Please contact Matt Gleich if you want to add someone to the list of
          people. Please make sure you have the following information!
        </p>
        <ul>
          <li>A photo of the person</li>
          <li>What city you met them in</li>
        </ul>
      </body>
    </div>
  )
}
