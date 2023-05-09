import React from 'react'
import styled from "styled-components"
import Test3D from './Test3D'

const Section=styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
@media only screen and (max-width: 700px) {
  text-align: center;
  height: 100vh;
  margin-top: 40px;

}
`
const Container=styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 700px) {
 width:100% ;
 flex-direction: column;
 justify-content: center;
 position: relative;
}
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
/* justify-content: center; */
@media only screen and (max-width: 700px) {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0px;
  margin: auto;
}
`


const Right=styled.div`
flex: 1;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 700px) {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

`

const Title=styled.h1`
color: white;
font-size: 74px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//text-shadow: 3px 1px #fc4ebc;
`
const WhatWeDo=styled.div``
const Line=styled.img``
const Subtitle=styled.h2`
color: #f30097;

`
const Desc=styled.p`
font-size: 24px;
color: whitesmoke
`
const Button=styled.button`
width: 120px;
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


const ThreeDModel=styled.div``

const Data=[
  'Web Design',
  'Development',
  'Illustration',
  'Product Design',
  'Social Media'
];


const Who = () => {
  return (
    <Section id="who">
        <Container>
            <Left style={{cursor:'pointer'}}> 
            <Test3D/>
           
            </Left>
            <Right>
            <Title>{"Redifine the possible".toUpperCase()}</Title>
                <WhatWeDo>
                    <Line/>
                    <Subtitle>Who am I ?</Subtitle>
                </WhatWeDo>
                <Desc>I'm a Full Stack Web Developer with a passion for creating robust and efficient web applications.</Desc>
                <Button onClick={()=>{window.open("https://www.linkedin.com/in/victor-mitra/","_blank")}}>More About Me</Button>
            </Right>
        </Container>

    </Section>
  )
}

export default Who