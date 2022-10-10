import styled from "styled-components"
import styles from '../styles/Home.module.css'
import face from '../public/luni_face.png'
import Image from "next/image"

export default function AboutMe({color}){
    return(
        <Frame color={color}>
        <h1>HI THERE, I AM LISA</h1>

        <Image className={styles.anim_pic} src={face} width="500" height="400" alt="lisa face"></Image>
  
        <p>I am a DJ, producer/composer and researcher with a background based on transdisciplinary design, sonic culture and media science.</p>
        <p>Sound is a phenomenon, that often catches my attraction in everyday life, in spirituality, in club culture and in communication. 2021, I wrote my master thesis about my favourite object - a singing bowl - a strong representation of how sound creates moments of peace and magic on the one hand, and cultural myths on the other. My productions of ambient, experimental and slow house music, released as Lisa von Mond, are strongly influenced by my research work. On my creative journey, I seek to amplify unconventional shapes of sonic culture towards a merge between music and sound art, connecting sound itself and its intersections with the social.</p>
        <p>My club DJ ego Lisa de Lune stands for deep, driving and pure techno, a strong source of power for me. I want to create experiences, which beam the crowd into an authentic rave feeling, while always dropping meditative and dreamy moments. Until now, I played in established clubs like KitKatClub / Berlin, Fabrique / Hamburg, Waagenbau / Hamburg, MSTreue / Bremen, Mensch Meier / Berlin, Übel+gefährlich / Hamburg, Dockville Festival / Hamburg, Zugvögel Festival / Eifel, Nowhere Burn / Spain, Anderswelt / Hamburg. I am part of the DJ/ club collective Kosmos&amp;Krawall, which grew out of a group of female:pressure members in Hamburg. We host spaces for FLINTA-DJs as well as club events.</p>
        <p>Lisa von Mond and Lisa de Lune are not two totally different identities, they can rather be seen as different shapes of the same concept.</p>
        <p>My EP lovely planet will be released at the end of this year. I am currently working on techno releases.</p>
        <p>Contact me: lisadelune (at) posteo.de / lisavomond (at) posteo.de</p>

        <div className={styles.rowspacer}> </div>
        </Frame>
    )
}

const Frame = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
color:${props=>props.color};
h1{border-bottom: 4px solid ${props=>props.color}}
`
