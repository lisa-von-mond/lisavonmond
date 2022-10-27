import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import kea from '../public/kea.gif'
import youandme from '../public/you-and-me.gif'
import styled, {css} from 'styled-components'
import { InlineFooter } from '../components/footer'
import arrow from '../public/pfeil.svg'
import Link from 'next/link'
import ArrowButton from '../components/arrow-button'

export default function Sound() {  
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Sound / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header currentPosition="sound" simple/>
 
     <div className={styles.content}>

        <main className={styles.main}>

        <h2 id="releases">OFFICIAL RELEASES</h2>

        <h3>kea // vak.leipzig</h3>

        <Image className={styles.anim_pic} src={kea} width="400" height="400" alt="kea cover"></Image>

        <p>A smooth soundscape chillout, released may 2022 on Solisampler VAK03 of vak.leipzig collective. Revenues from the sampler go to SeaWatch e.B. and Blindspots e.V. - an organization that supports volunteer structures for Balkan and Ukraine refugees.</p>
        <LinkWrapper>

        <ArrowButton link="https://soundcloud.com/vak-leipzig/sets/vak03" text="listen on soundcloud"/>
        <ArrowButton link="https://vak-leipzig.bandcamp.com/album/vak03" text="buy sampler on bandcamp"/>

        </LinkWrapper>

        <Spacer></Spacer>

        <h3>You and me // friendly connections</h3>

        <Image className={styles.anim_pic} src={youandme} width="400" height="400" alt="kea cover"></Image>

    
        <p>A warm and cosy downtempo track with influences of dub, house and ambient. Released may 2021 on the Bremen / Cologne label friendly connections</p>

        <ArrowButton link="https://soundcloud.com/friendlyconnections/lisa-von-mond-you-and-me" text="listen on soundcloud"/>

        <h2 id="trailer_soundtrack">TRAILER SOUNDTRACK</h2>
        <h3>lesbian gay film days 2020</h3>
        <p>Together with <a href="https://soundcloud.com/smallfieldt" target="blank" rel="noopener" className={styles.exlink}>Nika Smallfieldt</a> I made the trailer soundtrack of Lesbian Gay film days in Hamburg 2020, which was organized under the motto <em>quot people in trouble</em>.
        The creative team asked us to produce a track, which goes from an energetic and combative energy to something hopeful and positive. The result is a techno snippet with a transformation from moll and breakbeat to dur and straight.</p>
        <p>Trailer concept and cut by Evan Romero - thank you for the good cooperation!</p>

        <ArrowButton link="https://www.facebook.com/watch/?v=2781349775443374" text="view the trailer here"/>

        <Spacer></Spacer>
       </main>

       <InlineFooter/>
      
      </div>

    </div>
  )
}


const LinkWrapper = styled.div`

display:flex;
flex-direction: column;
align-items:flex-start;
gap: 0.8rem;`

const Spacer = styled.div`
height: 3rem;
`
