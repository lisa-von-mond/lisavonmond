import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function MobileMenu({viewMobileMenu, setViewMobileMenu, theme, simple}){

const [viewMSubMenu, setViewMSubMenu] = useState(false)

const menuFrame = {
  out: {},
  in: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const oneItem = {
  out: { scale:0 },
  in: { scale:1 }
} 

return(
<>

{viewMobileMenu &&    
<>
<MMenuFrame theme={theme} visible={viewMobileMenu}

as={motion.div} 
variants={menuFrame}
initial="out"
animate="in">

<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href={theme === "lvm" ? "/" : "/lisadelune"}>
    home
  </Link>
</MenuItem>

{theme === "lvm" ?? <MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMSubMenu(true)}>
  <Link href="/sound">
    sound
  </Link>
</MenuItem>}

<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href={theme === "lvm" ? "/about" : "/ldl-about"}>
    about
  </Link> 
</MenuItem>

<Spacer></Spacer>

<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href={theme === "lvm" ? "https://www.soundcloud.com/lisavonmond" :"https://www.soundcloud.com/lisadelune"} target="_blank" rel="noopener">
    soundcloud
  </Link>
</MenuItem>

<MenuItem className="item"  as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href="https://www.instagram.com/lisadelune" target="blank" rel="noopener">
    insta
  </Link>
</MenuItem>

<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href={theme === "lvm" ? "mailto:lisavonmond@posteo.de" : "mailto:lisadelune@posteo.de"} target="blank" rel="noopener">
    contact
  </Link>
</MenuItem>

<Spacer></Spacer>

{theme === "lvm" ? <MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href="/lisadelune" target="blank" rel="noopener">
    Lisa de Lune
  </Link>
</MenuItem>
:
<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href="/" target="blank" rel="noopener">
    Lisa von Mond
  </Link>
</MenuItem>}

<Spacer></Spacer>

<MenuItem className="item" as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenu(false)}>
  <Link href={theme === "lvm" ? "/legal-privacy" : "/privacy"} target="blank" rel="noopener">
    privacy
  </Link>
</MenuItem>

<XButton theme={theme} onClick={()=>setViewMobileMenu(false)}>×</XButton>

</MMenuFrame>
<Background theme={theme}></Background>  
</>}

</>
)    
}

const MMenuFrame = styled.div`

  position:fixed;
  width:100vw;
  height: 100vh;
  right: 0;
  top:0;
  font-size: 1.3rem;
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  z-index:2000;
  gap: 0.6rem;
  color:black;

.item:hover{border-bottom: 3px solid var(--lvm);}

${props =>
  props.theme === "ldl" &&
  css`
color:white;
.item:hover{border-bottom: 3px solid var(--ldl);}
  `}

@media only screen and (max-width:400px){
  font-size:1rem;

@media only screen and (min-width:800px){
  display:none;
}

}
`
const MenuItem = styled.li`

font-size: 1.2rem;
letter-spacing: 0.3rem;
font-weight: 500;
height: 1.8rem;
cursor:pointer;
z-index:90;
list-style-type:none;
`

const Spacer = styled.div`
height: 1rem;
`

const XButton = styled.div`
position:fixed;
top: 1rem;
right: 1rem;
height: 1.6rem;
width: 1.6rem;
display: flex;
align-items:center;
justify-content:center;
border-radius: 0.3rem;
font-size: 1.6rem;
cursor:pointer;
color:black;
border: 2px solid black;

&:hover{
border: 2px solid var(--lvm);
color: var(--lvm);
}

${props =>
  props.theme === "ldl" &&
  css`

color:white;
border: 2px solid white;

&:hover{
  border: 2px solid var(--ldl);
  color: var(--ldl);}
`}
`

const Background = styled.div`
position:fixed;
width: 110vw;
height: 110vh;
background:hotpink;
z-index:1000;
background: url(/cloud_background.jpg);
background-size: 100%;
background-repeat: no-repeat;
background-size: cover;

${props =>
  props.theme === "ldl" &&
  css`
  background: url(/background_retro.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  `}

`
