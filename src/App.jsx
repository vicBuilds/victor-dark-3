import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import styled from "styled-components"

const Container=styled.div`
height: 100vh;
background-color: black;
background: linear-gradient(to right, #010000, #a9a9a9);
color: white;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
&&::-webkit-scrollbar{
  display: none;
}
`

function App() {
  return (
    <Container>
       <Hero/>
      <Who/>
      <Works/> 
      <Contact/>
    </Container>
  )
}

export default App
