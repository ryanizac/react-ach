import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Content from '@/components/Content'

import styles from './styles.module.css'

interface TemplateProps {
  children: ReactNode
}

export default function Template(props: TemplateProps) {
  return (
    <div className={styles.template}>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  )
}
