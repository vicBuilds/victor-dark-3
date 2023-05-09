import React from 'react'
import styled from "styled-components"

const Section=styled.div`
width: 1400px;
display: flex;
justify-content: center;

@media only screen and (max-width: 700px) {
  width: 100%;
}
`
const Container=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 5px;

@media only screen and (max-width: 700px) {
  width: 100%;
}
`
const Links=styled.div`
    display: flex;
    align-items: center;
    //gap: 10px;
    margin-top: 2px;
  
`
const Icons=styled.div`
margin-top: 2px;
    
`
const Logo=styled.img`
height: 150px;
width: 150px;
`

const List=styled.ul`
display: flex;
gap: 80px;
list-style: none;
@media only screen and (max-width: 700px) {
  display:none;
}
`

const ListItem=styled.li``

const Button=styled.button`
width: 100px;
padding: 10px;
background-color: #b60472;
color: white;
border: none;
cursor: pointer;
border-radius: 5px;
transition: all 0.8s ease;
&:hover{
background-color: #0cf183;
color: black;
}
`
const Anchor=styled.a`
cursor: pointer;
color:inherit;
text-decoration: none;
`



const Navbar = () => {
  return (
    <Section>
        <Container>
        <Links>
        <Logo src='./img/Logo5.png'/>
        <List>
            <ListItem><Anchor href='#'>Home</Anchor></ListItem>
            <ListItem><Anchor href='#who'>About Me</Anchor></ListItem>
            <ListItem><Anchor href='#works'>Works</Anchor></ListItem>
            <ListItem><Anchor href='#contact'>Contact</Anchor></ListItem>
        </List>
        </Links>
        <Icons>
            <Button>Hire Now</Button>
        </Icons>
        </Container>
    </Section>

  )
}

export default Navbar