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
<div className={styles.background}></div>
<MobileMenu viewMobileMenu={viewMobileMenu} setViewMobileMenu={setViewMobileMenu}/>

<HeaderFrame>

<DesktopMenu>

<Link href="/">
<MenuItem>
home
</MenuItem>

</Link>

<div>
<Link href="/sound">
<MenuItemS onMouseEnter={() => setViewSubMenu(true)}>
sound
</MenuItemS>
</Link>

<DesktopSubMenu viewSubMenu={viewSubMenu} setViewSubMenu={setViewSubMenu}/>
</div>

<Link href="/about">
<MenuItem>
about
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="/">
<MenuItem>
soundcloud
</MenuItem>
</Link>

<Link href="/">
<MenuItem>
instagram
</MenuItem>
</Link>

<Link href="/">
<MenuItem>
contact
</MenuItem>
</Link>

<Spacer></Spacer>

<Link href="/">
<MenuItem>
Lisa de Lune
</MenuItem>
</Link>


</DesktopMenu>

<div className={styles.menusign} onClick={()=>setViewMobileMenu(!viewMobileMenu)}>
☰
</div>

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
top:2rem;
left: 2rem;
padding-right: 3rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
gap:1rem;
z-index:999;
letter-spacing: 0.2rem;

@media only screen and (max-width:700px){
  display:none;
}
`

const Spacer = styled.p`

margin: 0;
padding:0;
width: 1rem;
font-size: 0.8rem;
font-weight: 600;
margin-right: 0.6rem;

`

const MenuItem = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 1.8rem;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;

&:hover{
  list-style-type: none;
  border-bottom: 3px solid #f5ff00;
  }
`

const MenuItemS = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 1.8rem;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
`

const TitleText = styled.div`

  cursor:pointer;
  margin: 0;
  padding:0;
  height: 2rem;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;

&:hover{
  list-style-type: none;
  border-bottom: 3px solid black;
  }
`

