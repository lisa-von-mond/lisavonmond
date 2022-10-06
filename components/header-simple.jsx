import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { DesktopSubMenu } from './desktop-sub-menu'

export function HeaderSimple({currentPosition}){

const [viewMobileMenu, setViewMobileMenu] = useState(false)
const [viewSubMenu, setViewSubMenu] = useState(false)

return(
<>

<MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

<div className={styles.background_fix}></div>

<HeaderFrame>

<DesktopMenu>

<MenuItem current={currentPosition} this="home">
<Link href="/">home</Link>
</MenuItem>

<MenuItemS onMouseEnter={() => setViewSubMenu(true)} current={currentPosition} this="sound">
<Link href="/sound">sound</Link>
</MenuItemS>

<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>

<MenuItem current={currentPosition} this="about">
<Link href="/about">about</Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem current="soundcloud">
<Link href="https://soundcloud.com/lisavonmond" target="_blank">soundcloud</Link>
</MenuItem>

<MenuItem current="instagram">
<Link href="https://www.instagram.com/lisadelune/" target="_blank">instagram</Link>
</MenuItem>

<MenuItem current="contact">
<Link href="mailto:lisavonmond@posteo.de">contact</Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem current="Lisa de Lune">
<Link href="/lisadelune">Lisa de Lune</Link>
</MenuItem>

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
