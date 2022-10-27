import styled from "styled-components"
import styles from '../styles/Home.module.css'
import face from '../public/luni_face.png'
import Image from "next/image"

export default function AboutMe({color}){
    return(
        <Frame color={color}>
        <h1>HI THERE, I AM LISA</h1>

        <Image className={styles.anim_pic} src={face} width="500" height="400" alt="lisa face"></Image>
  
        <p>I am a DJ, producer and composer with a background based on transdisciplinary design, sonic culture and media science.</p>
        <p>Sound is a phenomenon, that often catches my attraction in everyday life, in spirituality, in culture and in interpersonal action. 2021, I wrote my master thesis about a singing bowl - my favourite sonic object and a strong representation of how sound creates moments of peace and magic on the one hand, and cultural myths on the other. My productions of ambient, experimental and slow house music are strongly influenced by my research work. On my creative journey, I seek to amplify unconventional shapes of sonic culture towards a merge between music and sound art, connecting sound itself and its intersections with the social.</p>
        <p>My club DJ ego Lisa de Lune stands for deep, driving and pure techno. I want to create experiences, that feel like an authentic rave, while always dropping meditative and dreamy moments. Until now, I played in clubs like Sisyphos / Berlin, KitKatClub / Berlin, Fabrique / Hamburg, Waagenbau / Hamburg, MSTreue / Bremen, Mensch Meier / Berlin, Übel+gefährlich / Hamburg, Anderswelt / Hamburg and on festivals like Zugvögel / Eifel, Dockville / Hamburg and Nowhere / Spain. I am part of the DJ collective Kosmos&amp;Krawall, which grew out of a group of female:pressure members in Hamburg. We host club events as well as networking spaces for FLINTA-DJs.</p>
        <p>Lisa von Mond and Lisa de Lune are not two totally different projects, they can rather be seen as different shapes of the same concept.</p>
        <p>My EP lovely planet will be released at the end of 2022.</p>
        <p>Contact me: lisadelune (at) posteo.de / lisavomond (at) posteo.de</p>
        </Frame>
    )
}

const Frame = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
color:${props=>props.color};

h1{
 border-bottom-color:${props=>props.color};
 margin-bottom: 3rem;
}

p{
padding: 0;
margin-bottom: 1rem;
}
`
