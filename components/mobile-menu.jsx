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
<Spacer></Spacer>
<Link href="/facebook" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)}>facebook</MenuItem>
</Link>
<Link href="/insta" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)}>insta</MenuItem>
</Link>
<Link href="/contact" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)}>contact</MenuItem>
</Link>
<Spacer></Spacer>
<Link href="/lisadelune" target="blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenu(false)}>Lisa de Lune</MenuItem>
</Link>
<XButton onClick={()=>setViewMobileMenu(false)}>x</XButton>
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
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  z-index:2000;
  gap: 0.6rem;
  color:black;
  background:skyblue;

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

font-size: 1.2rem;
letter-spacing: 0.3rem;
font-weight: 500;
height: 2rem;
cursor:pointer;
z-index:90;

&:hover{
  border-bottom: 3px solid black;
}
`

const Spacer = styled.div`
height: 1rem;
`

const XButton = styled.div`
position:fixed;
top: 1rem;
right: 1rem;
height: 2rem;
width: 2rem;
border: 2px solid black;
display: flex;
align-items:center;
justify-content:center;
border-radius: 0.3rem;
font-size: 1.6rem;
cursor:pointer;

&:hover{
color: skyblue;
background:black;
}
`
