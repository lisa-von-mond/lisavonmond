import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MobileMenu } from '../components/mobile-menu'
import { Header } from '../components/header'
import { useState } from 'react'
import kea from '../public/kea.gif'
import youandme from '../public/you-and-me.gif'
import lsftrailer from '../public/LSF_trailer.gif'
import ambientimage from '../public/ambient_decopic.gif'
import styled, {css} from 'styled-components'
import { KeaPlayer } from '../components/kea-player'
import { YouAndMePlayer } from '../components/you-and-me-player'
import Link from 'next/link'
import { AmbientWorksPlayer } from '../components/ambient-works-player'
import { Footer } from '../components/footer';
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion"

export default function Sound() {  
  
  const [viewMobileMenu, setViewMobileMenu] = useState(false)
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 100], [0, 100]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lisa von Mond</title>
        <meta name="Lisa von Mond" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header setViewMobileMenu={setViewMobileMenu}/>
      <MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

     <main className={styles.main}>

        <div className={styles.feature}>
        <div className={styles.featureinner}>
        <Cloud>
        <Link href="#releases"><p className={styles.featurelink}>°<span className={styles.featurelink_inner}>releases</span></p></Link>
        <Link href="#ambient_works"><p className={styles.featurelink}>°<span className={styles.featurelink_inner}>ambient works</span></p></Link>
        <Link href="#trailer_soundtrack"><p className={styles.featurelink}>°<span className={styles.featurelink_inner}>trailer soundtrack</span></p></Link>
        </Cloud>
        </div>
        </div>

        <div className={styles.content}>
        <div className={styles.rowspacer}></div>

        <h2 id="releases">OFFICIAL RELEASES</h2>
        <h3>kea // vak.leipzig</h3>

        <motion.div className={styles.decoimage}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
        <Image src={kea} width="500" height="500" alt="kea cover"></Image>
        </motion.div>

        <KeaPlayer/>
        <p>A smooth soundscape chillout, released may 2022 on Solisampler VAK03 of vak.leipzig collective. Revenues from the sampler go to SeaWatch e.B. and Blindspots e.V. - an organization that supports volunteer structures for Balkan and Ukraine refugees.</p>
        <p><a href="https://soundcloud.com/vak-leipzig/sets/vak03" target="blank" rel="noopener" className={styles.exlink}>Listen to Sampler on soundcloud</a></p>
        <p><a href="https://vak-leipzig.bandcamp.com/album/vak03" target="blank" rel="noopener" className={styles.exlink}>buy sampler on bandcamp</a></p>
  
        <div className={styles.rowspacer}></div>

        <h3>You and me // friendly connections</h3>

        <motion.div className={styles.decoimage}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>>
        <Image src={youandme} width="500" height="500" alt="you and me cover"></Image>
        </motion.div>

        <YouAndMePlayer/>
        <p>A warm and cosy downtempo track with influences of dub, house and ambient. Released may 2021 on the Bremen / Cologne label friendly connections</p>
        <p><a className={styles.exlink} href="https://soundcloud.com/friendlyconnections/lisa-von-mond-you-and-me" target="blank" rel="noopener">Listen to on soundcloud</a></p>
        <div className={styles.rowspacer}> </div>

        <h2 id="ambient_works">AMBIENT WORKS</h2>
        <div className={styles.decoimage}>
        <Image src={ambientimage} width="500" height="500" alt="lsf trailer screenshot"></Image>
        </div>
        <p>My early works: experimental ambient tracks, soundscapes and spheric dub vibes. Although my sound made a lot of transformation in the past few years, I reflect a lot on my older tracks as a part of my musical journey and source of inspiration. </p>
        <AmbientWorksPlayer/>

        <div className={styles.rowspacer}></div>

        <h2 id="trailer_soundtrack">TRAILER SOUNDTRACK</h2>
        <h3>lesbian gay film days 2020</h3>
        <motion.div className={styles.decoimage}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>>
        <Image src={lsftrailer} width="500" height="500" alt="lsf trailer screenshot"></Image>
        </motion.div>
        <p>Together with <a href="https://soundcloud.com/smallfieldt" target="blank" rel="noopener" className={styles.exlink}>Nika Smallfieldt</a> I made the trailer soundtrack of Lesbian Gay film days in Hamburg 2020, which was organized under the motto  &quot people in trouble &quot.
        The creative team asked us to produce a track, which goes from an energetic and combative energy to something hopeful and positive. The result is a techno snippet with a transformation from moll and breakbeat to dur and straight.</p>
        <p>Trailer concept and cut by Evan Romero - thank you for the good cooperation!</p>
        <a href="https://www.facebook.com/watch/?v=2781349775443374" className={styles.exlink} target="blank" rel="noopener">view the trailer here</a>
        <div className={styles.rowspacer}> </div>
  
       </div>
      
      </main>

    <Footer/>
    </div>
  )
}

const Cloud = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
gap:1rem;
`

const RocketWrapper = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
border: 2px solid green;
`