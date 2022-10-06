import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { MobileMenuLdL } from './mobile-menu-ldl'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function HeaderLdLSimple({currentPosition}){

const [viewMobileMenuL, setViewMobileMenuL] = useState(false)
      
return(
<>

<MobileMenuLdL viewMobileMenuL={viewMobileMenuL} setViewMobileMenuL={setViewMobileMenuL}/>

<div className={styles.background_fix_ldl}></div>

<HeaderFrame>

<DesktopMenu>

<MenuItem current={currentPosition} this="home">
<Link href="/lisadelune">home</Link>
</MenuItem>

<MenuItem current={currentPosition} this="about">
<Link href="/ldl-about">about</Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem current="soundcloud">
<Link href="https://soundcloud.com/lisadelune" target="_blank">soundcloud</Link>
</MenuItem>

<MenuItem current="instagram">
<Link href="https://www.instagram.com/lisadelune/" target="_blank">instagram</Link>
</MenuItem>

<MenuItem current="contact">
<Link href="mailto:lisadelune@posteo.de">contact</Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem current="lisavonmond">
<Link href="/">Lisa von Mond</Link>
</MenuItem>

</DesktopMenu>

<MenuSign onClick={()=>setViewMobileMenuL(true)}>
☰
</MenuSign>

</HeaderFrame>
</>
)    
}

const HeaderFrame = styled.div`
position:fixed;
top: 0;
left: 0;
height: 0.1rem;
z-index:999;
box-sizing:content-box;
color:white;
`
const DesktopMenu = styled.div`
position:fixed;
width:30%;
top:2rem;
left: 2rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
gap:0.4rem;
z-index:999;
letter-spacing: 0.2rem;

@media only screen and (max-width:900px){
  display:none;
}
`
const Spacer = styled.p`

height: 0.4rem;
margin: 0;
padding: 0;
`
const MenuItem = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  display:inherit;

&:hover{
  list-style-type: none;
  border-bottom: 3px solid var(--ldl);
  }

  ${props =>
    props.current === props.this &&
    css`
   font-weight: 800;
  `}
`

const MenuSign=styled.div`
position:fixed;
top: 1rem;
right: 1rem;
font-size: 1.3rem;
cursor:pointer;
color: white;

@media only screen and (min-width:900px){
  display:none;
}
`


