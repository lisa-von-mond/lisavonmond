import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { DesktopSubMenu } from './desktop-sub-menu'
import { motion } from 'framer-motion'

export function Header({currentPosition, simple}){

const [viewMobileMenu, setViewMobileMenu] = useState(false)
const [viewSubMenu, setViewSubMenu] = useState(false)

const wholeMenu = {
  out: { },
  in: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const oneItem = simple ? 
{
  out: { scale:1 },
  in: { scale:1 }
} 
: 
{
  out: { scale:0 },
  in: { scale:1 }
} 
      
return(
<>

<MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu} theme="lvm" simple={simple}/>

<div className={styles.background_fix}></div>

<HeaderFrame>

<DesktopMenu as={motion.div} 
variants={wholeMenu}
initial="out"
animate="in">

<MenuItem as={motion.div} variants={oneItem} current={currentPosition} this="home">
<Link href="/">home</Link>
</MenuItem>

<MenuItemS as={motion.div} variants={oneItem} onMouseEnter={() => setViewSubMenu(true)} current={currentPosition} this="sound">
<Link href="/sound">sound</Link>
</MenuItemS>

<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>

<MenuItem as={motion.div} variants={oneItem} current={currentPosition} this="about">
<Link href="/about">about</Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem as={motion.div} variants={oneItem} current="soundcloud">
<Link href="https://soundcloud.com/lisavonmond" passHref><a target="_blank">soundcloud</a></Link>
</MenuItem>

<MenuItem as={motion.div} variants={oneItem} current="instagram">
<Link href="https://www.instagram.com/lisadelune/" passHref><a target="_blank">instagram</a></Link>
</MenuItem>

<MenuItem as={motion.div} variants={oneItem} current="contact">
<Link href="mailto:lisavonmond@posteo.de" passHref><a target="_blank">contact</a></Link>
</MenuItem>

<Spacer></Spacer>

{/*<MenuItem as={motion.div} variants={oneItem} current="Lisa de Lune">
<Link href="/lisadelune">Lisa de Lune</Link>
</MenuItem>*/}

</DesktopMenu>

<MenuSign onClick={()=>setViewMobileMenu(!viewMobileMenu)}
    as={motion.div} 
    whileHover={{
    scale: 1.3,
    transition: { duration: 0.6 },}}>
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
color:var(--dark);
`
const DesktopMenu = styled.div`
position:fixed;
width:30%;
top:0;
left: 0;
padding: 2rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
gap:0.4rem;
z-index:999;

@media only screen and (max-width:900px){
  display:none;
}
`
const Spacer = styled.div`
height: 1rem;
`
const MenuItem = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 1.4rem;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  display:inherit;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: var(--lvm-invi);
  transition: border-bottom-color 1s;

&:hover{
  list-style-type: none;
  border-bottom-color: var(--lvm);
  }

  ${props =>
    props.current === props.this &&
    css`
   font-weight: 800;
  `}
`
const MenuItemS = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 1.4rem;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  display:inherit;

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
color: var(--dark);

@media only screen and (min-width:900px){
  display:none;
}
`
