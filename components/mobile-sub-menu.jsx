import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'

export function MobileSubMenu({viewMSubMenu, setViewMSubMenu, setViewMobileMenu}){

function hideMSubMenu(){
  setViewMSubMenu(false)
  setViewMobileMenu(false)
}

return(
        
<SubMMenuFrame visible={viewMSubMenu} onMouseLeave={()=>(setViewMSubMenu(false))}>
<Link href="/sound/#releases" target="blank" rel="noopener">
<SubMMenuItem onClick={hideMSubMenu}>releases</SubMMenuItem>
</Link>
<Link href="/sound/#ambient_works" target="blank" rel="noopener">
<SubMMenuItem onClick={hideMSubMenu}>ambient works</SubMMenuItem>
</Link>
<Link href="/sound/#trailer_soundtrack" target="blank" rel="noopener">
<SubMMenuItem onClick={hideMSubMenu}>soundtrack</SubMMenuItem>
</Link>
</SubMMenuFrame>
)    
}

const SubMMenuFrame = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  z-index:800;
  gap: 1.2rem;
  margin-top: -4rem;
  padding-top: 4rem;


${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`
const SubMMenuItem = styled.div`

cursor:pointer;
margin: 0;
padding:0;
height: 2.3rem;
font-size: 1.3rem;
text-transform: uppercase;
letter-spacing: 0.3rem;

&:hover{
  border-bottom: 3px solid #f5ff00;

}
  
`
