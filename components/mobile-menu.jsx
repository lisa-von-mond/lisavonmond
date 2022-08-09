import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'

export function MobileMenu({viewMobileMenu, setViewMobileMenu}){

function hideMobileMenu(){
    setViewMobileMenu(false)
      }

return(
        
<MMenuFrame visible={viewMobileMenu}>

<p className={styles.menuitem} onClick={hideMobileMenu}>home</p>
<p className={styles.menuitem} onClick={hideMobileMenu}>sound</p>
<p className={styles.menuitem} onClick={hideMobileMenu}>about</p>
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