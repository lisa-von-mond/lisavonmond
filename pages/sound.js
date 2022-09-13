import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { useState } from 'react'
import kea from '../public/kea.gif'
import youandme from '../public/you-and-me.gif'
import lsftrailer from '../public/LSF_trailer.gif'
import ambientimage from '../public/ambient_decopic.gif'
import styled, {css} from 'styled-components'
import { KeaPlayer } from '../components/kea-player'
import { YouAndMePlayer } from '../components/you-and-me-player'
import { AmbientWorksPlayer } from '../components/ambient-works-player'
import { Footer } from '../components/footer';
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion"
import handleViewport from 'react-in-viewport';

export default function Sound() {  
  
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 100], [0, 100]);
  const [pic, setPic] = useState("kea")
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Sound / Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header currentPosition="sound"/>
 
     <main className={styles.main}>

        <div className={styles.feature}>
        <ImageWrapper current={pic} thispic="kea">
        <Image className={styles.anim_pic} src={kea} width="500" height="500" alt="kea cover"></Image>
        </ImageWrapper>
        <ImageWrapper current={pic} thispic="youandme">
        <Image className={styles.anim_pic} src={youandme} width="500" height="500" alt="you and me cover" ></Image>
        </ImageWrapper>
        <ImageWrapper current={pic} thispic="lsf">
        <Image className={styles.anim_pic} src={lsftrailer} width="500" height="500" alt="lsf trailer screenshot"></Image>
        </ImageWrapper>
        <ImageWrapper current={pic} thispic="ambient">
        <Image className={styles.anim_pic} src={ambientimage} width="500" height="500" alt="lsf trailer screenshot"></Image>
        </ImageWrapper>
        </div>
        <div className={styles.emptyspace}></div>
        <div className={styles.content}>

        <h2 id="releases">OFFICIAL RELEASES</h2>
        <h3>kea // vak.leipzig</h3>

        <KeaPlayer/>
        <p>A smooth soundscape chillout, released may 2022 on Solisampler VAK03 of vak.leipzig collective. Revenues from the sampler go to SeaWatch e.B. and Blindspots e.V. - an organization that supports volunteer structures for Balkan and Ukraine refugees.</p>
        <p className={styles.exlink}><a href="https://soundcloud.com/vak-leipzig/sets/vak03" target="blank" rel="noopener">Listen to Sampler on soundcloud</a></p>
        <p className={styles.exlink}><a href="https://vak-leipzig.bandcamp.com/album/vak03" target="blank" rel="noopener">buy sampler on bandcamp</a></p>
  

        <h3 onEnterViewport={()=>setPic("youandme")}>You and me // friendly connections</h3>

        <YouAndMePlayer/>
        <p>A warm and cosy downtempo track with influences of dub, house and ambient. Released may 2021 on the Bremen / Cologne label friendly connections</p>
        <p><a className={styles.exlink} href="https://soundcloud.com/friendlyconnections/lisa-von-mond-you-and-me" target="blank" rel="noopener">Listen to on soundcloud</a></p>
   

        <h2 id="ambient_works">AMBIENT WORKS</h2>
        <p>My early works: experimental ambient tracks, soundscapes and spheric dub vibes. Although my sound made a lot of transformation in the past few years, I reflect a lot on my older tracks as a part of my musical journey and source of inspiration. </p>
        <AmbientWorksPlayer/>

        <h2 id="trailer_soundtrack">TRAILER SOUNDTRACK</h2>
        <h3>lesbian gay film days 2020</h3>
        <p>Together with <a href="https://soundcloud.com/smallfieldt" target="blank" rel="noopener" className={styles.exlink}>Nika Smallfieldt</a> I made the trailer soundtrack of Lesbian Gay film days in Hamburg 2020, which was organized under the motto  &quot people in trouble &quot.
        The creative team asked us to produce a track, which goes from an energetic and combative energy to something hopeful and positive. The result is a techno snippet with a transformation from moll and breakbeat to dur and straight.</p>
        <p>Trailer concept and cut by Evan Romero - thank you for the good cooperation!</p>
        <a href="https://www.facebook.com/watch/?v=2781349775443374" className={styles.exlink} target="blank" rel="noopener">view the trailer here</a>
  
       </div>
      
      </main>

    <Footer/>
    </div>
  )
}


const ImageWrapper = styled.div`
${props =>
  props.current !== props.thispic &&
  css`
display:none;
`}`