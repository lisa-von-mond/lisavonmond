import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrivacyText from '../components/privacy-text'
import { Header } from '../components/header'

export default function LegalPrivacy() {


  return (
    <div className={styles.container}>
       <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header simple/>
     
      <div className={styles.content}>

      <main className={styles.main}>

        <PrivacyText color="black"/>

      </main>
      
      </div>

    </div>
  )
}


