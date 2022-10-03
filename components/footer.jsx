import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Footer(){

return(

  <footer className={styles.footer}>
  <Link href="/legal-privacy">
  <p className={styles.footer_link}>legal notice / privacy policy</p>
  </Link>
  </footer>
)    
}

