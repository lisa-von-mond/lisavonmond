import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { Moon } from '../components/moon'
import { Footer } from '../components/footer'
import stars from '../public/stars_gradientshape.png'
import bowl from '../public/bowl_pure.png'


export default function Home() {
  
  const [viewMobileMenu, setViewMobileMenu] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setViewMobileMenu={setViewMobileMenu} currentPosition="home"/>
        <MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

      <main className={styles.main}>

        <Moon/>

      <div className={styles.content}>
      <VarImageOne>
          <Image src={bowl} alt="bowl" height="700" width="700"></Image>
      </VarImageOne>
      <VarIntro>
      <h1>LISA VON MOND</h1>
      <h3>ambient dub, dreamtunes, slow wave<br></br>sound production, composition and research</h3>
      </VarIntro>
      </div>
      </main>

      <Footer/>
    </div>
  )
}


const VarIntro = styled.div`

position: block;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:center;
padding-left: 0;
text-align:left;
z-index:0;


@media only screen and (min-width:800px)
{
position:fixed;
height: 80vh;
width: 60vw;
top: 10vh;
right: 0;
padding-left: 6rem;


}`

const VarImageOne = styled.div`

position: block;


@media only screen and (min-width:800px)
{

position: fixed;
height: 100vh;
width: 45%;
top: 0;
left:0;
display:flex;
align-items:center;
justify-content:center;
padding: 0;

}`
