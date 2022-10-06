import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { HeaderSimple } from '../components/header-simple'
import PrivacyText from '../components/privacy-text'

export default function LegalPrivacy() {


  return (
    <div className={styles.container}>
       <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <HeaderSimple/>
     
      <div className={styles.content}>

      <main className={styles.main}>

        <PrivacyText color="black"/>

      </main>
      
      </div>

    </div>
  )
}


