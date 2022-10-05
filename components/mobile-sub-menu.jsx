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
  gap: 0.6rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;


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
height: 2rem;
font-size: 1.2rem;
letter-spacing: 0.3rem;

&:hover{
  border-bottom: 3px solid blueviolet;;
}
  
`
