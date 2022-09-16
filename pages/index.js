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
import bowl from '../public/bowl_pure.png'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPosition="home"/>

      <main className={styles.main}>
      <IntroPic>
      <Image className={styles.anim_pic} src={bowl} alt="bowl" height="700" width="700"></Image>
      </IntroPic>
      <Intro>
      <h1>LISA VON MOND</h1>
      <h3>ambient dub, dreamtunes, slow wave<br></br>sound production, composition and research</h3>
      </Intro>
      </main>

      <Footer/>
    </div>
  )
}

const IntroPic = styled.div`
width:100%;

display:flex;
align-items: center;
justify-content:center;
text-align:left;
z-index:0;
animation: fade 2s;

@media only screen and (min-width:800px)
{
width: 50%;
height: 80vh;
}`


const Intro = styled.div`

display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:center;
text-align:left;
z-index:0;
animation: fade 2s;

@media only screen and (min-width:800px)
{
width: 50%;

}`

