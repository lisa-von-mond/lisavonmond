import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import { HeaderLdL } from '../components/header-ldl'
import { Moon } from '../components/moon'

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


      <StartContent>
          <Moon color="var(--ldl)"/>
          <Intro>
              <h1>Lisa de Lune</h1>
              <p>Full moon techno</p>
          </Intro>
          <News>
          <p>UPCOMING</p>
          <p>17.10.22 sysyphos / B</p>
          <p>29.10.22 hafenklang / HH</p>
          <p>29.11.22 luna / K</p>
        </News>

      </StartContent>
    
        <PrivacyFixed>
          <a href="/legal-privacy">privacy policy</a>
        </PrivacyFixed>

      </main>

    </div>
  )
}

const StartContent = styled.div`
position: fixed;
left: 40%;
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
gap: 0.2rem;
animation: fade 2s;
color: white;

h1{
  border-bottom: 4px solid white;
}
p{
  margin: 0;
  padding: 0;
  letter-spacing: 0.2rem;
}
`

const News = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:center;
gap: 0.2rem;
animation: fade 2s;
color: var(--ldl);
text-transform:uppercase;
letter-spacing: 0.3rem;

p{
  padding: 0;
  margin:0;
}
`

const PrivacyFixed = styled.div`
position: fixed;
left: 2rem;
bottom: 2rem;
letter-spacing: 0.2rem;
font-size: 0.8rem;
cursor:pointer;
height: 1.3rem;
box-sizing: border-box;
color:white;

&:hover{
  border-bottom: 2px solid var(--ldl);
}
`

