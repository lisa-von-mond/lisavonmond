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

const [viewMobileMenu, setViewMobileMenu] = useState(false)

function seeMobileMenu(){
  setViewMobileMenu(true)
}

  return (
    <div className={styles.container}>
       <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setViewMobileMenu={setViewMobileMenu} currentPosition="about"/>
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
        <div className={styles.rowspacer_flex}> </div>


        <h1 className={styles.headline_d}>HI THERE, I AM LISA</h1>
        <h1 className={styles.headline_m}>HI THERE,</h1>
        <h1 className={styles.headline_m}>I AM LISA</h1>

        <div className={styles.decoimage}>
        <Image src={face} width="600" height="500" alt="kea cover"></Image>
        </div>
      
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
gap:0.5rem;


`