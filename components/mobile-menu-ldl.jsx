import styled, {css} from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function MobileMenuLdL({viewMobileMenuL, setViewMobileMenuL}){

  const menuFrame = {
    out: {},
    in: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const oneItem = {
    out: { scale:0 },
    in: { scale:1 }
  }

return(
       <>
{viewMobileMenuL &&       
<MMenuFrame 
as={motion.div} 
variants={menuFrame}
initial="out"
animate="in">

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="/lisadelune">
    home
  </Link>
</MenuItem>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="/ldl-about">
    about
  </Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="https://soundcloud.com/lisadelune" target="_blank" rel="noopener">
    soundcloud
  </Link>
</MenuItem>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="https://instagram.com/lisadelune" target="_blank" rel="noopener">
    insta
  </Link>
</MenuItem>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="mailto:lisadelune@posteo.de" rel="noopener">
    contact
  </Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="/">
    Lisa von Mond
  </Link>
</MenuItem>

<Spacer></Spacer>

<MenuItem as={motion.div} variants={oneItem} onClick={()=>setViewMobileMenuL(false)}>
  <Link href="/privacy">
    privacy
  </Link>
</MenuItem>

<XButton onClick={()=>setViewMobileMenuL(false)}>×</XButton>

</MMenuFrame>}
</> 
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
  color:white;
  background: url(/background_retro.jpg);
  background-size:cover;
  backgrouund-repeat: no-repeat;

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

@media only screen and (max-width:400px){
  font-size:1rem;
}

&:hover{
  border-bottom: 3px solid var(--ldl);
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
border: 2px solid white;
color: white;
display: flex;
align-items:center;
justify-content:center;
border-radius: 0.3rem;
font-size: 1.6rem;
cursor:pointer;
padding: 0.2rem;

&:hover{
color: var(--ldl);
border: 2px solid var(--ldl);
}
`
