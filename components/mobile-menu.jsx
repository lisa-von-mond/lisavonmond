import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import insta from '../public/insta.svg'
import soundcloud from '../public/soundcloud.svg'

export function MobileMenu({viewMobileMenu, setViewMobileMenu}){

function hideMobileMenu(){
    setViewMobileMenu(false)
      }

return(
        
<MMenuFrame visible={viewMobileMenu}>
<Link href="/" target="blank" rel="noopener">
<p className={styles.menuitem} onClick={hideMobileMenu}>home</p>
</Link>
<Link href="/sound" target="blank" rel="noopener">
<p className={styles.menuitem} onClick={hideMobileMenu}>sound</p>
</Link>
<Link href="/about" target="blank" rel="noopener">
<p className={styles.menuitem} onClick={hideMobileMenu}>about</p>
</Link>
<Link href="https://soundcloud.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={soundcloud} width="60" height="35" alt="soundcloud"></Image></Link>
<Link href="https://instagram.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={insta} width="30" height="30" alt="insta"></Image></Link>

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
  z-index:100;
  gap: 2rem;
  border: 2px solid blue;

@media only screen and (min-width:800px){
    display:none;
}

${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`
