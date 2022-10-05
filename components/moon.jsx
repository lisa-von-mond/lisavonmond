import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import {mooncalendar} from '../utils/moon-calendar.js'

export function Moon({color}){

const today = new Date()

const moonMonth = today.getMonth() + 1;   
const moonYear = today.getFullYear(); 
const moonDate = today.getDate();

const todayDate = moonDate.toString() + "/" + moonMonth.toString() + "/" + moonYear.toString()

const moonState = (mooncalendar.find(e => e.date === todayDate)).state

console.log(moonState)

const nextFullMoon = (mooncalendar.find(e => e.state === "full moon")).date

return(
  <MoonWrapper color={color}>
  <p>{todayDate} *** {moonState}</p>
  <p>next full moon: {nextFullMoon}</p>
  </MoonWrapper>
)    
}

const MoonWrapper = styled.div`
font-size: 0.7rem;
letter-spacing: 0.2rem;
display:flex;
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
height: auto;
text-align:left;
gap: 0.1rem;
color:${props=>props.color};
animation: fade 2s;

p{
  margin: 0;
  padding: 0;
  display:inherit;
}

`