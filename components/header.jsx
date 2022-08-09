import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'

export function Header({setViewMobileMenu}){

function showMobileMenu(){
    setViewMobileMenu(true)
      }

return(
  <>

  <h1 className={styles.title}>
  <a href="/">🌑</a>
 </h1>


<div className={styles.desktopmenu}>

<Link href="/">
<p className={styles.menuitem}>
home
</p>
</Link>

<p className={styles.spacer}>
/
</p>

<Link href="/releases">
<p className={styles.menuitem}>
releases
</p>
</Link>

<p className={styles.spacer}>
/
</p>

<p className={styles.menuitem}>
about
</p>

</div>

<div className={styles.menusign} onClick={showMobileMenu}>
☰
</div>
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