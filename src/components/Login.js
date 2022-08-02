import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Disney+ is the streaming home of your favorite stories. 
            With unlimited entertainment from Disney, Pixar, Marvel, Star Wars and National Geographic, 
            there's always something to explore. Watch the latest releases, Original series and movies, 
            classic films, and TV shows with new stories added every week. 
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
min-height: calc(100vh - 70px);
position: relative;
display: flex;
align-items: top;
justify-content: center;


&:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
}
`

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 5px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 9px;
margin-bottom: 14px;

&:hover{
    background: #0483ee;
}

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
width: 90%;
`