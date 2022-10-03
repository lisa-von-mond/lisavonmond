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

      <Header currentPosition="home"/>

      <main className={styles.main}>

      <Intro>
      <h4>ambient dub, dreamtunes, slow wave<br></br>sound production, composition and research</h4>
      </Intro>

      <ContentAll>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </ContentAll>


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
justify-content:flex-end;
text-align:left;
animation: fade 2s;
color: blueviolet;
padding: 2rem;
`

const ContentAll = styled.div`
height: 2000px;
padding: 2rem;
`
