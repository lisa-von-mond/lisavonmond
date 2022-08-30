import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Footer({setViewMobileMenu}){


return(

  <footer className={styles.footer}>
  <p>© Lisa de Lune 2022</p>
  <Link href="/legal-privacy">
  <p className={styles.footer_link}>legal notice / privacy policy</p>
  </Link>
  </footer>
)    
}

