import Link from 'next/link'
import styled from 'styled-components'

export function InlineFooter(){

return(

  <FooterWrapper>
    <FooterInner>
      <FooterText>Lisa de Lune 2022</FooterText>
      <FooterText><a href="/legal-privacy">privacy policy</a></FooterText>
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

  @media only screen and (min-width:900px){
    padding-right: 5rem;
    padding-left: 5rem;
  }
`
const FooterInner = styled.footer`
  display:flex;
  align-items:center;
  justify-content:center;
  border-top: 3px solid black;
  gap: 2rem;
`

const FooterText = styled.p `

.a{
  cursor:pointer;
}

.a:hover(
  height: 1.7rem;
  border-bottom: 3px solid black;
)

`
