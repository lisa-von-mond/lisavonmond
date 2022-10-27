import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import {mooncalendar} from '../utils/moon-calendar.js'
import Image from 'next/image'
import moon from '../public/moon_mask_white.png'

export function Moon({color}){

const today = new Date()

const moonMonth = today.getMonth() + 1;   
const moonYear = today.getFullYear(); 
const moonDate = today.getDate();

const todayDate = moonDate.toString() + "/" + moonMonth.toString() + "/" + moonYear.toString()
console.log(today)

return(
  <MoonWrapper color={color}>
    <div className="moonpic"><Image src={moon} width="70" height="70"></Image></div>
  
  <div><p>{todayDate}</p></div>
  <div><p className="spacer">  </p><p>increasing o</p></div>
  <div><p>next full moon:</p></div>
  <div><p className="spacer">   </p><p>09/11/2022</p></div>
  </MoonWrapper>
)    
}

const MoonWrapper = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
height: auto;
text-align:left;
gap: 0.4rem;
color:${props=>props.color};
animation: fade 2s;

@media (max-width:900px){
  display:none;
}

p{
  margin: 0;
  padding: 0;
  display:inherit;
  font-size: 0.7rem;
  height: 1rem;
}

div{
  display:flex;
  flex-direction: row;
}

div .spacer{
  width: 1rem;
}

.moonpic{
 margin-bottom: 1rem;
}

`