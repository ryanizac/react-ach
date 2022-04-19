import Image from 'next/image'
import imgMe from '@public/me.png'
import styles from './styles.module.css'

export default function AboutPage() {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.contentImg}>
        <Image src={imgMe} className={styles.img} />
      </div>
      <h1 className={styles.title}>Ryan Izac</h1>
      <p className={styles.subtitle}>Desenvolvedor de Software</p>
    </div>
  )
}
