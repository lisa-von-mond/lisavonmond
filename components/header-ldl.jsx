import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import { MobileMenuLdL } from './mobile-menu-ldl'
import { useState } from 'react'

export function HeaderLdL({currentPosition}){

const [viewMobileMenuL, setViewMobileMenuL] = useState(false)
      
return(
<>

<MobileMenuLdL viewMobileMenuL={viewMobileMenuL} setViewMobileMenuL={setViewMobileMenuL}/>

<div className={styles.background_fix_ldl}></div>

<HeaderFrame>

<DesktopMenu>

<Link href="/lisadelune">
<MenuItem current={currentPosition} this="home">
home
</MenuItem>
</Link>

<Link href="/ldl-about">
<MenuItem current={currentPosition} this="about">
about
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="https://soundcloud.com/lisadelune" target="_blank">
<MenuItem current="soundcloud">
soundcloud
</MenuItem>
</Link>

<Link href="https://www.instagram.com/lisadelune/" target="_blank">
<MenuItem current="instagram">
instagram
</MenuItem>
</Link>

<Link href="mailto:lisadelune@posteo.de">
<MenuItem current="contact">
contact
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="/">
<MenuItem current="lisavonmond">
Lisa von Mond
</MenuItem>
</Link>

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


