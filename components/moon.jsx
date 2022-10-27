import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components'
import {mooncalendar} from '../utils/moon-calendar.js'
import Image from 'next/image'
import moon from '../public/moon_mask_white.png'
import { useState, useEffect } from 'react'

export function Moon({color}){

const [moonPhase, setMoonPhase] = useState(null)
const [nextFullMoon, setNextFullMoon] = useState(null)

const today = new Date()

function transformDate(d){

const moonMonth = d.getMonth() + 1;   
const moonYear = d.getFullYear(); 
const moonDate = d.getDate();
return moonDate.toString() + "/" + moonMonth.toString() + "/" + moonYear.toString()
}

const todayDate = transformDate(today);

const moonReadable = mooncalendar.map(e => ({...e, milliseconds: (new Date(e.date)).getTime()}))

useEffect(() => {
const currentms = today.getTime()
const filtered = moonReadable.filter(e => e.milliseconds > currentms)

function generatePhase()
  {if (filtered[0].state === "full moon" || filtered[1].state === "full moon" )
    {setMoonPhase("increasing moon")}
  else
    {setMoonPhase("waning moon")}}
  
generatePhase()

function generateNextFullMoon(){
  const next = (filtered.filter(e => e.state = "full moon"))[0]
  setNextFullMoon(transformDate(new Date(next.date)))
}

generateNextFullMoon()

}

)


return(
  <MoonWrapper color={color}>
    <div className="moonpic"><Image src={moon} width="70" height="70"></Image></div>
  
  <div><p>{todayDate}</p></div>
  <div><p className="spacer">  </p><p>{moonPhase}</p></div>
  <div><p>next full moon:</p></div>
  <div><p className="spacer">   </p><p>{nextFullMoon}</p></div>
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