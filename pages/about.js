import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import styled, {css} from 'styled-components'
import face from '../public/luni_face.png'
import Link from 'next/link'



export default function Home() {

const [viewMobileMenu, setViewMobileMenu] = useState(false)

function seeMobileMenu(){
  setViewMobileMenu(true)
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa von Mond</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setViewMobileMenu={setViewMobileMenu}/>
        <MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

      <main className={styles.main}>
        <div className={styles.feature}>
        <div className={styles.featureinner}>
        <Cloud>
        <Link href="https://www.soundcloud.com/lisavonmond" target="blank" rel="noopener"><p className={styles.featurelink}>soundcloud</p></Link>
        <Link href="https://www.instagram.com/lisavonmond" target="blank" rel="noopener"><p className={styles.featurelink}>insta</p></Link>
        <Link href="https://www.soundcloud.com/kosmosundkrawall" target="blank" rel="noopener"><p className={styles.featurelink}>Kosmos+Krawall</p></Link>
        <Link href="https://www.soundcloud.com/lisadelune" target="blank" rel="noopener"><p className={styles.featurelink}>Lisa de Lune</p></Link>
        </Cloud>
        </div>
        </div>

        <div className={styles.content}>

        <h2>HI THERE, I AM LISA</h2>

        <div className={styles.decoimage}>
        <Image src={face} width="600" height="500" alt="kea cover"></Image>
        </div>
      
        <p>I am a producer/composer, researcher and DJ with a background based on transdisciplinary design, sonic culture and media science. As Lisa von Mond, I produce ambient, experimental and slow house music and seek to amplify unconventional shapes of sonic culture towards a merge between music and sound art, connecting sound itself and its intersections with the social.</p>
        <h3>Lisa de Lune</h3>
        <p>My DJ ego Lisa de Lune stands for deep, driving and pure techno and feels home in rave crowds and underground spheres.</p>
        <p>Upcoming gigs: 13/08 KitKatClub / B * 19/08 ms dockville / HH * 17/09 Kitkatclub / B</p>
      
        <div className={styles.rowspacer}> </div>

      
  
       </div>
      
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        legal notice
        </a>
        /
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        privacy policy
        </a>
      </footer>
    </div>
  )
}


const Cloud = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:2rem;
text-align:center;
gap:0.5rem;


`