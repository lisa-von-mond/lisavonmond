import styled, {css} from "styled-components"
import Link from "next/link"
import { useState } from "react"

export default function ArrowButton({link, text}){

const[hover, setHover] = useState(false)

    return(

        <Link href={link} target="blank" rel="noopener">
            <SoundLink hover={hover} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
                <Arrow hover={hover}>
                    <ArrowStroke hover={hover}></ArrowStroke>
                </Arrow>
                <LinkText>{text}</LinkText>
            </SoundLink>
        </Link>

    )
}


const SoundLink = styled.div`

border-width: 2px;
border-style: solid;
border-color: var(--dark);
height: 2.2rem;
width: auto;
display:flex;
align-items:center;
justify-content:center;
gap: 0.7rem;
margin:0;
padding:0.3rem 0.7rem 0.3rem 0.7rem;
border-radius: 100px;
box-sizing: border-box;
background:rgb(255, 255, 255, 0);
color: rgb(0, 0, 0);
transition: background 2s, color 2s, border-color 2s;
cursor:pointer;

${props =>
    props.hover &&
    css`
        background: var(--dark);
        color:rgb(255, 255, 255);
        border-color: rgba(0, 0, 0, 0);
  `}
`

const Arrow = styled.div`
height: 1rem;
width: 1rem;
aspect-ratio: 1;
border-top-color: var(--dark);
border-right-color: var(--dark);
border-top-width: 2px;
border-right-width: 2px;
border-top-style: solid;
border-right-style: solid;
position: relative;
box-sizing: content-box;
transition: border-right-color 2s, border-top-color 2s;;

${props =>
    props.hover &&
    css`
    border-top-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
  `}
`

const ArrowStroke = styled.div`
position: absolute;
right: -1.5px;
top: 0;
height: 1.4rem;
width: 1.4rem;
aspect-ratio: 1;
border-right-color: var(--dark);
border-right-width: 2px;
border-right-style: solid;
transform: rotate(45deg);
transform-origin: top right;
transition: border-right-color 2s;

${props =>
    props.hover &&
    css`
    border-right-color: rgb(255, 255, 255);
  `}`


const LinkText = styled.p`
font-family:"Padauk";
font-size: 1rem;
margin: 0;
padding: 0;
`


