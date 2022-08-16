import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import {mooncalendar} from '../utils/moon-calendar.js'

export function Moon({}){

const today = new Date()


const moonMonth = today.getMonth() + 1;   
const moonYear = today.getFullYear(); 
const moonDate = today.getDate();

const todayDate = moonDate.toString() + "/" + moonMonth.toString() + "/" + moonYear.toString()

const moonState = (mooncalendar.find(e => e.date === todayDate)).state

console.log(moonState)

const nextFullMoon = (mooncalendar.find(e => e.state === "full moon")).date


return(


  <MoonCircle>
  <p className={styles.featuretext}>{todayDate}</p>
  <p className={styles.featuretext}>{moonState}</p>
  <p className={styles.featuretext}>next full moon:</p>
  <p className={styles.featuretext}>{nextFullMoon}</p>
  </MoonCircle>


)    
}


const MoonCircle = styled.div`
background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
height:300px;
border-radius:1000px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
aspect-ratio:1;
padding:2rem;
text-align:center;
gap:0.5rem;
`