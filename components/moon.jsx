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
font-size: 0.7rem;
position:fixed;
bottom: 2rem;
left: 2rem;
height:300px;
display:flex;
align-items:flex-start;
justify-content:flex-end;
flex-direction:column;
aspect-ratio:1;
text-align:left;
gap:0.5rem;

@media only screen and (max-width:799px){
display:none;

}

`