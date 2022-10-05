import styled from "styled-components"
import styles from '../styles/Home.module.css'
import face from '../public/luni_face.png'
import Image from "next/image"

export default function AboutMe({color}){
    return(
        <Frame color={color}>
        <h1>HI THERE, I AM LISA</h1>

        <Image className={styles.anim_pic} src={face} width="500" height="400" alt="lisa face"></Image>
  
        <p>I am a producer/composer, researcher and DJ with a background based on transdisciplinary design, sonic culture and media science. As Lisa von Mond, I produce ambient, experimental and slow house music and seek to amplify unconventional shapes of sonic culture towards a merge between music and sound art, connecting sound itself and its intersections with the social.</p>

        <p>Contact me: lisavomond (at) posteo.de</p>

        <div className={styles.rowspacer}> </div>
        </Frame>
    )
}

const Frame = styled.div`
color:${props=>props.color};
`
