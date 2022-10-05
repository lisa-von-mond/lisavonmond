import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { HeaderLdL } from '../components/header-ldl'
import AboutMe from '../components/about-text'
import { InlineFooter } from '../components/footer'

export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa de Lune</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLdL currentPosition="about"/>
       
      <div className={styles.content}>

      <main className={styles.main}>

          <AboutMe color="white"/>

       </main>

       <InlineFooter color="white"/>
      
      </div>

    </div>
  )
}


