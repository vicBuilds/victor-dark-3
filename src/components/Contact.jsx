import React, {useRef, useState} from 'react'
import styled from "styled-components"
import MapChart from './Maps.jsx'
import emailjs from '@emailjs/browser';

const Section=styled.div`
height: 100vh;
scroll-snap-align: center;
@media only screen and (max-width: 700px) {
  text-align: center;
  height: 100vh;
  margin-top: 40px;
}
`
const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 15px;
@media only screen and (max-width: 700px) {
 width:100% ;
 flex-direction: column;
 justify-content: center;
}
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: start;
justify-content: flex-end;
padding: 20px;
@media only screen and (max-width: 700px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

`
const Title=styled.h1`
font-weight: 200;
`
const Form=styled.form`
display: flex;
flex-direction: column;
gap: 25px;
width: 60%;
`;

const Input=styled.input`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #faf4ed;
outline: none;

`
const TextArea=styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #faf4ed;
outline: none;
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
background-color: green;
}
`; 

const Right=styled.div`
flex: 1;
`

const Contact = () => {
  const form=useRef();
  const [success, setSuccess]=useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_oyiw42c', 'template_yqvw38x', form.current, 'hDUAsYkTpG2Aex5K2')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
    
  }


  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form onSubmit={(e)=>handleSubmit(e)} ref={form}>
            <Title>Contact Me</Title>
            <Input placeholder='Name' name="name" required={true} type='text'/>
            <Input placeholder='Email' name="email" required={true} type='email'/>
            <TextArea placeholder='Write your Message' rows={10} name="message" required={true} type='text'/>
            <Button type='submit'>Send</Button>
            {success && <p>Your message has been sent. I will get back to you soon. </p>}
          </Form>
        </Left>
        <Right>
          <MapChart/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact