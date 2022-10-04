import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import styled, {css} from 'styled-components'
import AboutMe from '../components/about-text'
import { InlineFooter } from '../components/footer'


export default function About() {


  return (
    <div className={styles.container}>
       <Head>
        <title>About / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPosition="about"/>
       
      <div className={styles.content}>

      <main className={styles.main}>

          <AboutMe/>

       </main>

       <InlineFooter/>
      
      </div>

    </div>
  )
}


