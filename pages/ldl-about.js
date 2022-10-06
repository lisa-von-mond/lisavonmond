import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/about-text'
import { InlineFooter } from '../components/footer'
import { HeaderLdLSimple } from '../components/header-ldl-simple'

export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa de Lune</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLdLSimple currentPosition="about"/>
       
      <div className={styles.content}>

      <main className={styles.main}>

          <AboutMe color="white"/>

       </main>

       <InlineFooter color="white"/>
      
      </div>

    </div>
  )
}


