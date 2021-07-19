import styles from '@styles/components/Button.module.css'
import Link from 'next/link'

export default function Button({ url, text }: { url: string; text: string }) {
  return (
    <Link href={url} passHref>
      <button className={styles.button}> {text}</button>
    </Link>
  )
}
