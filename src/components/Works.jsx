import React, { useState } from 'react'
import styled from "styled-components"
import WebDesign from './ThreeDComponents/WebDesign'
import Development from './ThreeDComponents/Development'
import Illustration from './ThreeDComponents/IIlustration'
import SocialMedia from './ThreeDComponents/SocialMedia'
import ProductDesign from './ThreeDComponents/ProductDesign'

const Section=styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
padding: 15px;
@media only screen and (max-width: 700px) {
  text-align: center;
}
`
const Container=styled.div`
//width: 1400px;
width: 100%;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 700px) {
 width:100% ;
 flex-direction: column;
 justify-content: center;

}
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
/* justify-content: center; */
@media only screen and (max-width: 700px) {
  justify-content: center;
}
`
const List=styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
@media only screen and (max-width: 700px) {
  gap:20px;
}


`
const ListItem=styled.li`
font-size: 70px;
font-weight: bold;
cursor: pointer;
color: transparent;
position:relative;
-webkit-text-stroke: 1px #f5ecec;
text-shadow:2px 2px 2px rgb(255, 255, 255);;
animation: changecolor 1s linear;
@media only screen and (max-width: 700px) {
  font-size: 40px;
}

::after{
  position: absolute;
  top: 0;
  left: 0;
  content:"${(props)=>{return props.text.toUpperCase();}}";
  //content: 'Hello';
  color:#111010;
  transition: all 0.9s ease;
}
&:hover{
  ::after{
    color:#ffffff;
  }
}`


const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`

const Title=styled.h1`
color: white;
font-size: 74px;
@media only screen and (max-width: 700px) {
  font-size: 24px;
}
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

`


const ThreeDModel=styled.div``

const Data=[
  'Web Design',
  'Development',
  'Illustration',
  'Product Design',
  'Versality'
];


const Works = () => {
  const[item, setItem]=useState('Web Design');
  return (
    <Section id="works">
        <Container>
            <Left> 
            <List>
           {Data.map((item)=>(
            <ListItem key={item} text={item} onClick={()=>{setItem(item);}}>{item.toUpperCase()}</ListItem>
           ))}
            
            </List>
           
            </Left>
            <Right>
        
             {item === 'Web Design' ? <WebDesign />
                : item === 'Development' ? <Development />
                : item === 'Illustration' ? <Illustration />
                : item === 'Product Design' ? <ProductDesign />
                : item === 'Versality' ? <SocialMedia />
                : null}
            </Right>
        </Container>

    </Section>
  )
}

export default Works