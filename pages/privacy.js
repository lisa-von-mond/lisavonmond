import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrivacyText from '../components/privacy-text'
import { HeaderLdL } from '../components/header-ldl'


export default function Privacy() {


  return (
    <div className={styles.container}>
       <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa de Lune" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLdL simple/>
     
      <div className={styles.content}>

      <main className={styles.main}>

    <PrivacyText color="white" />

      </main>
      </div>

    </div>
  )
}