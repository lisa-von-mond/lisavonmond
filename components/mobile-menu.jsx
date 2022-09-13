import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import insta from '../public/insta.svg'
import soundcloud from '../public/soundcloud.svg'
import { MobileSubMenu } from './mobile-sub-menu'
import { useState } from 'react'

export function MobileMenu({viewMobileMenu, setViewMobileMenu}){

const [viewMSubMenu, setViewMSubMenu] = useState(false)

return(
        

<MMenuFrame visible={viewMobileMenu}>
<div className={styles.m_background}></div>
<Link href="/" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)} >home</MenuItem>
</Link>
<Link href="/sound" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMSubMenu(true)} className={styles.menuitem}>sound</MenuItem>
</Link>
<MobileSubMenu viewMSubMenu={viewMSubMenu} setViewMSubMenu={setViewMSubMenu} setViewMobileMenu={setViewMobileMenu}/>
<Link href="/about" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)}>about</MenuItem>
</Link>
<MenuItemSocials>
<Link href="https://soundcloud.com/lisavonmond" target="blank" rel="noopener"><Image src={soundcloud} width="60" height="35" alt="soundcloud"></Image></Link>
</MenuItemSocials>
<MenuItemSocials>
<Link href="https://instagram.com/lisavonmond" target="blank" rel="noopener"><Image src={insta} width="30" height="30" alt="insta"></Image></Link>
</MenuItemSocials>
</MMenuFrame>
)    
}


const MMenuFrame = styled.div`

  position:fixed;
  width:100vw;
  height: 100vh;
  right: 0;
  top:0;
  font-size: 1.3rem;
  background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  z-index:800;
  gap: 2rem;
  color:white;

@media only screen and (min-width:800px){
    display:none;
}

${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`


const MenuItem = styled.div`

font-size: 1.3rem;
text-transform: uppercase;
letter-spacing: 0.3rem;
font-weight: 500;
height: 2rem;
cursor:pointer;
z-index:90;

&:hover{
  border-bottom: 3px solid #f5ff00;

}

`

const MenuItemSocials = styled.div`

height: 2rem;
cursor:pointer;
-webkit-filter: invert(1);
filter: invert(1);


`
