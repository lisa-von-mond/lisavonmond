import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { DesktopSubMenu } from './desktop-sub-menu'

export function Header({currentPosition}){

const [viewMobileMenu, setViewMobileMenu] = useState(false)
const [viewSubMenu, setViewSubMenu] = useState(false)
      
return(
<>

<MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

<div className={styles.background_fix}></div>

<HeaderFrame>

<DesktopMenu>

<Link href="/">
<MenuItem current={currentPosition} this="home">
home
</MenuItem>
</Link>

<Link href="/sound">
<MenuItemS onMouseEnter={() => setViewSubMenu(true)} current={currentPosition} this="sound">
sound
</MenuItemS>
</Link>

<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>

<Link href="/about">
<MenuItem current={currentPosition} this="about">
about
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="https://soundcloud.com/lisavonmond" target="_blank">
<MenuItem current="soundcloud">
soundcloud
</MenuItem>
</Link>

<Link href="https://www.instagram.com/lisadelune/" target="_blank">
<MenuItem current="instagram">
instagram
</MenuItem>
</Link>

<Link href="mailto:lisavonmond@posteo.de">
<MenuItem current="contact">
contact
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="/lisadelune">
<MenuItem current="Lisa de Lune">
Lisa de Lune
</MenuItem>
</Link>


</DesktopMenu>

<MenuSign onClick={()=>setViewMobileMenu(!viewMobileMenu)}>
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
color:black;
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

&:hover{
  list-style-type: none;
  border-bottom: 3px solid var(--lvm);
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

@media only screen and (min-width:900px){
  display:none;
}
`
