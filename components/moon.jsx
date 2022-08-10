import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'

export function Moon({}){

const today = new Date()

const todaydate = today.toString()
console.log(todaydate)

const moonMonth = today.getMonth() + 1;   
const moonYear = today.getFullYear(); 
const moonDate = today.getDate(); 


return(

<MoonFrame>
  <p className={styles.featuretext}>{moonDate}/{moonMonth}/{moonYear}</p>
  <p className={styles.featuretext}>increasing moon</p>
  <p className={styles.featuretext}>next full moon:</p>
  <p className={styles.featuretext}>12/08/22</p>
</MoonFrame>

)    
}

const MoonFrame = styled.div`
background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
border-radius:1000px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
aspect-ratio:1;
padding:2rem;
text-align:center;
gap:0.5rem;

@media only screen and (min-width:800px){
  position:fixed;
  left:15%;
  top:30%;
  padding:3rem;
}

`