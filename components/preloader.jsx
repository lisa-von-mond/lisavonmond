import styled from "styled-components"
import styles from '../styles/Home.module.css'

export default function MoonPreloader(){

    return(

<PreloadScreen>
<PreloadWrapper>
    <PreloadMoon del="0s">
        <PreloadMoonInner del="0s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="0.3s">
        <PreloadMoonInner del="0.3s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="0.6s">
        <PreloadMoonInner del="0.6s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="0.9s">
        <PreloadMoonInner del="0.9s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="1.2s">
        <PreloadMoonInner del="1.2s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="1.5s">
        <PreloadMoonInner del="1.5s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="1.8s">
        <PreloadMoonInner del="1.8s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="2.1s">
        <PreloadMoonInner del="2.1s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="2.4s">
        <PreloadMoonInner del="2.4s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="2.7s">
        <PreloadMoonInner del="2.7s"></PreloadMoonInner>
    </PreloadMoon>
    <PreloadMoon del="3.0s">
        <PreloadMoonInner del="3.0s"></PreloadMoonInner>
    </PreloadMoon>


</PreloadWrapper>
</PreloadScreen>


    )
}


const PreloadScreen = styled.div`
position:fixed;
width: 110vw;
height: 110vh;
top: -5vh;
left: -5vw;
background: url(/cloud_background.jpg);
background-repeat: no-repeat;
background-size: cover;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
}`

const PreloadWrapper=styled.div`
height: 7rem;
width: 7rem;
position: relative;
box-sizing: content-box;`

const PreloadMoon = styled.div`
position: absolute;
top: 0;
left: 0;
height: 7rem;
width: 7rem;
box-sizing: content-box;
display:flex;
align-items:center;
justify-content: center;
animation: fadeout 2s;
animation-delay:${props=>props.del};
`
const PreloadMoonInner = styled.div`
box-sizing: content-box;
border-radius: 50%;
animation: moon 2s linear;
animation-delay:${props=>props.del};
box-sizing: content-box;
`

