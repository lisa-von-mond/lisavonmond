import styled, {css} from 'styled-components'
import Link from 'next/link'

export function DesktopSubMenu({viewSubMenu, setViewSubMenu}){

return(
        
<SubMenuFrame visible={viewSubMenu} onMouseLeave={()=>(setViewSubMenu(false))}>
<Link href="/sound/#releases" target="blank" rel="noopener">
<SubMenuItem onClick={()=>(setViewSubMenu(false))}>releases</SubMenuItem>
</Link>
<Link href="/sound/#trailer_soundtrack" target="blank" rel="noopener">
<SubMenuItem onClick={()=>(setViewSubMenu(false))}>soundtrack</SubMenuItem>
</Link>
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
  gap: 1.2rem;
  margin-top: -3rem;
  padding-top: 4rem;
  margin-left: 3rem;

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
height: 2rem;
font-size: 1.2rem;

&:hover{
  border-bottom: 3px solid blueviolet;

}
  
`
