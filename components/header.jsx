import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import insta from '../public/insta.svg'
import soundcloud from '../public/soundcloud.svg'
import Image from 'next/image'

export function Header({setViewMobileMenu, currentPosition}){

function showMobileMenu(){
    setViewMobileMenu(true)
      }

return(
  <HeaderAll>

 <p className={styles.title}>
  <Link href="/">LvM°</Link>
 </p>

<div className={styles.desktopmenu}>

<Link href="/">
<MenuItemWrapper>
<MenuCircle text="home" current={currentPosition}>°</MenuCircle>
<p className={styles.menuitem}>
home
</p>
</MenuItemWrapper>

</Link>

<Link href="/sound">
<MenuItemWrapper>
<MenuCircle text="sound" current={currentPosition}>°</MenuCircle>
<p className={styles.menuitem}>
sound
</p>
</MenuItemWrapper>
</Link>

<Link href="/about">
<MenuItemWrapper>
<MenuCircle text="about" current={currentPosition}>°</MenuCircle>
<p className={styles.menuitem}>
about
</p>
</MenuItemWrapper>
</Link>

<Link href="https://soundcloud.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={soundcloud} width="60" height="35" alt="soundcloud"></Image></Link>
<Link href="https://instagram.com/lisavonmond" target="blank" rel="noopener"><Image  className={styles.menuitem} src={insta} width="30" height="30" alt="insta"></Image></Link>

</div>

<div className={styles.menusign} onClick={showMobileMenu}>
☰
</div>
</HeaderAll>
)    
}

const MenuItemWrapper = styled.div`
display:flex;
flex-direction:row;
`

const MenuCircle = styled.p`

margin: 0;
padding:0;
font-family: 'Share Tech Mono', monospace;

${props =>
  props.text !== props.current &&
  css`
display:none;
`}
`

const HeaderAll = styled.div`
z-index:999;`

