import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/about-text'
import { InlineFooter } from '../components/footer'
import { Header } from '../components/header'


export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPosition="about" simple/>
       
      <div className={styles.content}>

      <main className={styles.main}>

          <AboutMe/>

       </main>

       <InlineFooter/>
      
      </div>

    </div>
  )
}


