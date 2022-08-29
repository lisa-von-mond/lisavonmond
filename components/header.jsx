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
  <Link href="/">🌑</Link>
 </h1>


<div className={styles.desktopmenu}>



<Link href="/">
<MenuItemWrapper>
<p className={styles.menunonsense}>°&nbsp;</p>
<p className={styles.menuitem}>
home
</p>
</MenuItemWrapper>

</Link>

<Link href="/sound">
<MenuItemWrapper>
<p className={styles.menunonsense}>°&nbsp;</p>
<p className={styles.menuitem}>
sound
</p>
</MenuItemWrapper>
</Link>

<Link href="/about">
<MenuItemWrapper>
<p className={styles.menunonsense}>°&nbsp;</p>
<p className={styles.menuitem}>
about
</p>
</MenuItemWrapper>
</Link>


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
  gap: 2rem;
  border: 2px solid blue;
  z-index:100;

@media only screen and (min-width:800px){
    display:none;
}

${props =>
    props.visible === false &&
    css`
   display:none;
  `}
  
`

const MenuItemWrapper = styled.div`
display:flex;
flex-direction:row;`
