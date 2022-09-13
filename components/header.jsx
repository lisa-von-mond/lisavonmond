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

<HeaderAll>

 <p className={styles.title}>
  <Link href="/">LvM°</Link>
 </p>

<DesktopMenu>

<Link href="/">
<MenuItemWrapper>
<MenuCircle text="home" current={currentPosition}>°</MenuCircle>
<MenuItem>
home
</MenuItem>
</MenuItemWrapper>

</Link>

<div>
<Link href="/sound">
<MenuItemWrapper onMouseEnter={() => setViewSubMenu(true)}>
<MenuCircle text="sound" current={currentPosition}>°</MenuCircle>
<MenuItem>
sound
</MenuItem>
</MenuItemWrapper>
</Link>
<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>
</div>

<Link href="/about">
<MenuItemWrapper>
<MenuCircle text="about" current={currentPosition}>°</MenuCircle>
<MenuItem>
about
</MenuItem>
</MenuItemWrapper>
</Link>

<Link href="https://soundcloud.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={soundcloud} width="60" height="35" alt="soundcloud"></Image></Link>
<Link href="https://instagram.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={insta} width="30" height="30" alt="insta"></Image></Link>

</DesktopMenu>

<div className={styles.menusign} onClick={showMobileMenu}>
☰
</div>
</HeaderAll>
</>
)    
}


const DesktopMenu = styled.div`
position:fixed;
top: 3rem;
right: 3rem;
display:flex;
justify-content:space-between;
align-items:flex-start;
gap:0;
font-size: 1.5rem;
padding: 0;
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
font-family: 'Share Tech Mono', monospace;

${props =>
  props.text !== props.current &&
  css`
display:none;
`}
`

const HeaderAll = styled.div`
z-index:1;
height: 6rem;
box-sizing:content-box;
`

const MenuItem = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  font-size: 1.4rem;
  line-height: 1.4rem;
  height: 2rem;


&:hover{
  list-style-type: none;
  border-bottom: 4px solid black;
  
  }
`


