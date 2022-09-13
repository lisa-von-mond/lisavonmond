import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import styled, {css} from 'styled-components'
import face from '../public/luni_face.png'
import Link from 'next/link'
import { Footer } from '../components/footer'



export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPosition="about"/>
       
      <main className={styles.main}>
        <div className={styles.feature}>
        <div className={styles.featureinner}>
        <Cloud>
        <div className={styles.decoimage}>
        <Image src={face} width="700" height="600" alt="lisa face"></Image>
        </div>
        </Cloud>
        </div>
        </div>

        <div className={styles.content}>
        <div className={styles.rowspacer_flex}> </div>


        <h1 className={styles.headline_d}>HI THERE, I AM LISA</h1>
        <h1 className={styles.headline_m}>HI THERE,</h1>
        <h1 className={styles.headline_m}>I AM LISA</h1>

      
        <p>I am a producer/composer, researcher and DJ with a background based on transdisciplinary design, sonic culture and media science. As Lisa von Mond, I produce ambient, experimental and slow house music and seek to amplify unconventional shapes of sonic culture towards a merge between music and sound art, connecting sound itself and its intersections with the social.</p>

        <p>Next to my experimental sound work, I work as techno DJ under the ego Lisa de Lune as well.</p>

        <p>Contact me: lisavomond (at) posteo.de</p>

        <p>*** more info and content coming soon ***</p>
      
        <div className={styles.rowspacer}> </div>

      
  
       </div>
      
      </main>

     <Footer/>
    </div>
  )
}


const Cloud = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
padding:0;
gap:2rem;
`
