import styled, {css} from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function DesktopSubMenu({viewSubMenu, setViewSubMenu}){

return(
        
<SubMenuFrame visible={viewSubMenu} onMouseLeave={()=>(setViewSubMenu(false))}>

<SubMenuItem onClick={()=>(setViewSubMenu(false))}>
<Link href="/sound/#releases" target="blank" rel="noopener">
  releases
</Link>
</SubMenuItem>

<SubMenuItem onClick={()=>(setViewSubMenu(false))}>
<Link href="/sound/#trailer_soundtrack" target="blank" rel="noopener">
  soundtrack
</Link>
</SubMenuItem>

</SubMenuFrame>
)    
}

const SubMenuFrame = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:flex-start;
  text-align:left;
  z-index:800;
  gap: 0.4rem;
  margin: 0 0 0 1.4rem;

${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`
const SubMenuItem = styled.div`

cursor:pointer;
margin: 0;
padding:0;
height: 1.4rem;
font-size: 1rem;
letter-spacing: 0.2rem;
border-bottom-width: 3px;
border-bottom-style: solid;
border-bottom-color: var(--lvm-invi);
transition: border-bottom-color 1s;

&:hover{
  border-bottom: 3px solid var(--lvm);

}
  
`
