import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import styled, {css} from 'styled-components'

import { Footer } from '../components/footer'
import AboutMe from '../components/about-text'


export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background_fix}></div>

      <Header currentPosition="about"/>
       
      <main className={styles.main}>

      <div className={styles.content}>

          <AboutMe/>

       </div>
      
      </main>

    </div>
  )
}


