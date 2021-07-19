import styles from '@styles/components/Button.module.css'

export default function Button({ url, text }: { url?: string; text: string }) {
  return (
    <a href={url}>
      <button className={styles.button}> {text}</button>
    </a>
  )
}
