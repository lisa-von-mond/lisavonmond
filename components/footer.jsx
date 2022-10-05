import Link from 'next/link'
import styled from 'styled-components'

export function InlineFooter({color}){

return(

  <FooterWrapper color={color}>
    <FooterInner color={color}>
      <FooterText>Lisa de Lune 2022</FooterText>
      <Link href="/legal-privacy"><FooterLink color={color}>privacy policy</FooterLink></Link>
    </FooterInner>
  </FooterWrapper>
)    
}

const FooterWrapper = styled.footer`
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: 1rem;
  z-index:200;
  color:${props=>props.color};


  @media only screen and (min-width:900px){
    padding-right: 5rem;
    padding-left: 5rem;
  }
`
const FooterInner = styled.footer`
  display:flex;
  align-items:center;
  justify-content:center;
  border-top: 2px solid ${props=>props.color};
  gap: 2rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;

`

const FooterText = styled.p `

font-family: 'Padauk', sans-serif;
padding: 0;
margin: 0;
height: 1.7rem;

`

const FooterLink = styled.p `

font-family: 'Padauk', sans-serif;
cursor:pointer;
padding: 0;
margin: 0;
height: 1.7rem;

:&hover(
  border-bottom: ${props=>props.color};
)

`
