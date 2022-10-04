import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import styled, {css} from 'styled-components'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background_fix}></div>
      
      <Header currentPosition="home"/>

      <main className={styles.main}>

   

      </main>
    </div>
  )
}

const Intro = styled.div`
height: 100vh;
width: 100%;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:center;
text-align:left;
animation: fade 2s;
color: blueviolet;
padding: 2rem;
`
const ContentAll = styled.div`
height: 2000px;
padding: 2rem;
`
