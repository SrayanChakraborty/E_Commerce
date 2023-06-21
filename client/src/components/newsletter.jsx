import { Send } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height :60vh;
  background-color  :#fcf5f5 ;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
`
const Description=styled.div`
    margin-top:20px;
`
const Inputcontainer=styled.div`
 margin-top:20px;
 display:flex;
 flex-direction: column;
 
 
`
const Input=styled.textarea`
    
`
const Button=styled.button`
 cursor:pointer ;
 width:41px;
 background-color: transparent;
 border: none;
 font-size:30px;
 transition: 0.3s all ease;
    &:hover{
        transform: scale(1.5);
    }
 
`
const Title=styled.h1 `
    font-size: 50px;
`

function Newsletter(){
    return (
        <Container>
            <Title>Feedback Form</Title>
            <Description>Fill this form for your valuable feedback!!</Description>
            <Inputcontainer>
            <Input placeholder='Enter your message' rows='10' cols='100'/>
            <Button> 
                <Send />
            </Button>
        
            </Inputcontainer>
        </Container>
    )
}

export default Newsletter;