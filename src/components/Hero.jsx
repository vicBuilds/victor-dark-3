import React from 'react'
import styled from "styled-components"
import Navbar from './Navbar'

const Section=styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 700px) {
  height:150vh;
  text-align: center;

}
`
const Container=styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 700px) {
 width:100% ;
 flex-direction: column;
 justify-content: center;
 
}
`
const Left=styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 700px) {
  flex: 1;
  align-items: center;
  margin-bottom: 15px;
  padding: 20px;
}
`

const Right=styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 700px) {
  flex: 1;
}
`

const Title=styled.h1`
color: white;
font-size: 74px;
@media only screen and (max-width: 700px) {
 padding :20px ;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

`
const WhatWeDo=styled.div``
const Line=styled.img``
const Subtitle=styled.h2`
color: #f30097;
`
const Desc=styled.p`
font-size: 24px;
color: whitesmoke;
@media only screen and (max-width: 700px) {
    font-size: 20px;
}
`
const Button=styled.button`
width: 100px;
padding: 10px;
background-color: #f30097;
color: white;
border: none;
cursor: pointer;
border-radius: 5px;
transition: all 0.9s ease;
&:hover{
    background-color: #ba0707;
}
`

const Moon=styled.img`
height: 500px;
width: 500px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 700px) {
  margin-top: 20px;
  height: 300px;
  width: 300px;
}
@keyframes animate {
    to {
        transform: translateY(-20px);
    }
    
}
`;


const ThreeDModel=styled.div``



const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>CODE. DEBUG. DEPLOY.</Title>
                <WhatWeDo>
                    <Line/>
                    <Subtitle>What I Do</Subtitle>
                </WhatWeDo>
                <Desc>Crafting digital wonders, one line of code at a time. </Desc>
               <Button onClick={()=>{
                window.open("https://github.com/vicBuilds", "_blank");
               }}>My Works</Button>
            </Left>
            <Right>
                <Moon src='./img/developer3.png'/>
            </Right>
        </Container>

    </Section>
  )
}

export default Hero