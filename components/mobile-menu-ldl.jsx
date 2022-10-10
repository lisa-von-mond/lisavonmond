import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'

export function MobileMenuLdL({viewMobileMenuL, setViewMobileMenuL}){

return(
        
<MMenuFrame visible={viewMobileMenuL}>
<div className={styles.m_background}></div>
<Link href="/lisadelune">
<MenuItem onClick={()=>setViewMobileMenuL(false)} >home</MenuItem>
</Link>
<Link href="/ldl-about">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>about</MenuItem>
</Link>
<Spacer></Spacer>
<Link href="https://soundcloud.com/lisadelune" target="_blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>soundcloud</MenuItem>
</Link>
<Link href="https://instagram.com/lisadelune" target="_blank" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>insta</MenuItem>
</Link>
<Link href="mailto:lisadelune@posteo.de" rel="noopener">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>contact</MenuItem>
</Link>
<Spacer></Spacer>
<Link href="/">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>Lisa von Mond</MenuItem>
</Link>
<Spacer></Spacer>
<Link href="/privacy">
<MenuItem onClick={()=>setViewMobileMenuL(false)}>privacy</MenuItem>
</Link>
<XButton onClick={()=>setViewMobileMenuL(false)}>×</XButton>
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
