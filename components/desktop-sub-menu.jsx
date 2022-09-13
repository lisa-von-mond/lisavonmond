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
<p className={styles.menuitem} onClick={hideSubMenu}>releases</p>
</Link>
<Link href="/sound/#ambient_works" target="blank" rel="noopener">
<p className={styles.menuitem} onClick={hideSubMenu}>ambient works</p>
</Link>
<Link href="/sound/#trailer_soundtrack" target="blank" rel="noopener">
<p className={styles.menuitem} onClick={hideSubMenu}>soundtrack</p>
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
  margin-top: 0.7rem;
  width: 7rem;
  padding-left: 0.8rem;
  border: 2px solid blue;


${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`
