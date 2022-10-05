import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import { HeaderLdL } from '../components/header-ldl'

export default function LisaDeLune() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa de Lune</title>
        <meta name="Lisa de Lune" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLdL currentPosition="home"/>

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
