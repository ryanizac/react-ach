import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>Meu Sistema</h1>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>login</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
