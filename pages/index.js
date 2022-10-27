import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import styled, {css} from 'styled-components'
import { Moon } from '../components/moon'
import Link from 'next/link'

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
        <StartContent>
          <MoonWrapper>
            <Moon color="white" />
          </MoonWrapper>

            <Intro>
              <h1>Lisa von Mond</h1>
              <p>Ambient dub, dreamtunes, slow wave<br></br>sound production, composition and research</p>
            </Intro>
            <News>
              <ComingSoon>coming soon</ComingSoon>
              <p>lovely planet EP</p>
              <p>12/22 Hul Berlin</p>
            </News>

        </StartContent>

        <PrivacyFixed>
          <Link href="/legal-privacy">privacy policy</Link>
        </PrivacyFixed>
 
      </main>

    </div>
  )
}


const StartContent = styled.div`
position: fixed;
left: 35%;
top: 0;
height: 100vh;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 3rem;
padding: 0;

@media only screen and (max-width:899px){
left: 0;
top: 1rem;
padding: 2rem;
}
`

const Intro = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:flex-start;
text-align:left;
gap: 0.2rem;
animation: fade 2s;
color: var(--dark);

h1{
  border-bottom: 4px solid var(--dark);
}

p{
  margin: 0;
  padding: 0;
}
`

const News = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:center;
gap: 0.2rem;
animation: fade 2s;
color: var(--lvm);
text-transform:uppercase;
letter-spacing: 0.3rem;
text-alihn:center;

p{
  padding: 0;
  margin:0;
}
`

const PrivacyFixed = styled.div`
position: fixed;
right: 2rem;
bottom: 2rem;
letter-spacing: 0.2rem;
font-size: 0.8rem;
cursor:pointer;
height: 1.3rem;
color: white;
box-sizing: border-box;
border-bottom-width: 3px;
border-bottom-style: solid;
border-bottom-color: var(--lvm-invi);
transition: border-bottom-color 1s;

&:hover{
  border-bottom-color: white;
}

@media only screen and (max-width:899px){
  display:none;
}
`

const ComingSoon = styled.p`
font-weight: 600;
border-bottom: 2px solid var(--lvm);
margin-bottom: 0.5rem !important;
text-align:left;
`

const MoonWrapper = styled.div`
position: fixed;
right: 2rem;
top: 2rem;

.moon{
  animation: moon_rotate 5s;
}

`


