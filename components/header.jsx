import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import insta from '../public/insta.svg'
import soundcloud from '../public/soundcloud.svg'
import Image from 'next/image'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { DesktopSubMenu } from './desktop-sub-menu'

export function Header({currentPosition}){

const [viewMobileMenu, setViewMobileMenu] = useState(false)
const [viewSubMenu, setViewSubMenu] = useState(false)

function showMobileMenu(){
    setViewMobileMenu(true)
      }

function showSubMenu(){
    setViewSubMenu(true)
      }
      
return(
<>
<MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

<HeaderFrame>

 <p className={styles.title}>
  <Link href="/"><b>◯</b></Link>
 </p>

<DesktopMenu>

<Link href="/">
<MenuItemWrapper>
<MenuCircle text="home" current={currentPosition}>◯</MenuCircle>
<MenuItem>
home
</MenuItem>
</MenuItemWrapper>

</Link>

<div>
<Link href="/sound">
<MenuItemWrapper onMouseEnter={() => setViewSubMenu(true)}>
<MenuCircle text="sound" current={currentPosition}>◯</MenuCircle>
<MenuItem>
sound
</MenuItem>
</MenuItemWrapper>
</Link>
<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>
</div>

<Link href="/about">
<MenuItemWrapper>
<MenuCircle text="about" current={currentPosition}>◯</MenuCircle>
<MenuItem>
about
</MenuItem>
</MenuItemWrapper>
</Link>

</DesktopMenu>

<div className={styles.menusign} onClick={showMobileMenu}>
☰
</div>


<SocialsFrame>
<SocialsItem>
<Link href="https://soundcloud.com/lisavonmond" target="blank" rel="noopener"><Image src={soundcloud} width="60" height="35" alt="soundcloud"></Image></Link>
</SocialsItem>
<SocialsItem>
<Link href="https://instagram.com/lisavonmond" target="blank" rel="noopener"><Image src={insta} width="30" height="30" alt="insta"></Image></Link>
</SocialsItem>
</SocialsFrame>
</HeaderFrame>
</>
)    
}

const HeaderFrame = styled.div`
position:fixed;height: 0.1rem;
z-index:999;
box-sizing:content-box;
`

const DesktopMenu = styled.div`
position:fixed;
width:50%;
top:10rem;
left: 2rem;
padding-right: 3rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
gap:1.2rem;
z-index:999;
text-transform:uppercase;
letter-spacing: 0.2rem;

@media only screen and (max-width:700px){
  display:none;
}
`

const MenuItemWrapper = styled.div`
display:flex;
flex-direction:row;
width:15rem;
`

const MenuCircle = styled.p`

margin: 0;
padding:0;
font-size: 1.1rem;
font-weight: 600;
margin-right: 0.6rem;

${props =>
  props.text !== props.current &&
  css`
opacity:0;
`}
`

const MenuItem = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 2.4rem;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;

&:hover{
  list-style-type: none;
  border-bottom: 3px solid black;
  
  }
`

const SocialsFrame = styled.div`

position:fixed;
right: 2rem;
top: 2rem;
display:flex;
align-items:center;
gap: 2rem;

@media only screen and (max-width:799px){
  display:none;
}

`

const SocialsItem = styled.div`

cursor:pointer;

`

