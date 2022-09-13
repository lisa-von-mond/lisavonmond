import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import insta from '../public/insta.svg'
import soundcloud from '../public/soundcloud.svg'

export function DesktopSubMenu({viewSubMenu, setViewSubMenu}){

function hideSubMenu(){
  setViewSubMenu(false)
}

return(
        
<SubMenuFrame visible={viewSubMenu} onMouseLeave={()=>(setViewSubMenu(false))}>
<Link href="/sound/#releases" target="blank" rel="noopener">
<SubMenuItem onClick={hideSubMenu}>releases</SubMenuItem>
</Link>
<Link href="/sound/#ambient_works" target="blank" rel="noopener">
<SubMenuItem onClick={hideSubMenu}>ambient works</SubMenuItem>
</Link>
<Link href="/sound/#trailer_soundtrack" target="blank" rel="noopener">
<SubMenuItem onClick={hideSubMenu}>soundtrack</SubMenuItem>
</Link>
</SubMenuFrame>
)    
}

const SubMenuFrame = styled.div`

  font-size: 1.3rem;
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:flex-start;
  text-align:left;
  z-index:800;
  gap: 1rem;
  margin-top: 1rem;
  width: 15rem;
  background: rgb(247, 247, 247);

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
font-size: 1.4rem;
line-height: 1.4rem;
height: 2rem;


&:hover{
border-bottom: 4px solid black;

}
  
`
