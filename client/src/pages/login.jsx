import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import {login} from '../redux/apiCall.js';

const Container=styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg,brown,beige);


`
const Wrapper=styled.div`
  width:40%;
  padding:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border:0px solid black;
  background-color: #f3eeda;
  border-radius:20px;
  box-shadow: 8px 8px 9px black;
  transition: 0.5s all ease;
&:hover{
    transform: scale(1.2);
    box-shadow: 12px 12px 11px black;

}

   
`

const Heading=styled.h1`
   margin :10px;
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input=styled.input`
    height:40px;
    width:358px;
    margin:2px;
    border-radius: 6px;
    border:1px solid black;
`
const Button=styled.button`
margin:10px;
height:40px;
width:80px;
border-radius: 8px;
border: none;
background-color: #d0cece;
cursor: pointer;

`
const Link=styled.a`

`

const Error=styled.span`
    color:red;
`

function Login(){

    const [password,setpassword]=useState("");
    const [username ,setusername]=useState("");
    const dispatch=useDispatch();
    const {isFetching,error}=useSelector((state)=>state.user);
    
    function handleusername(event){
        setusername(event.target.value)
    }
    function handlepassword(event){
        setpassword(event.target.value) 
    }
    function handleClick(event){
        event.preventDefault()
        login(dispatch,{username,password})
    }
    

    return(
         <Container>
            <Wrapper>
                <Heading >Login</Heading>
                <Form>
                    <Input placeholder='Username' onChange={handleusername} value={username}/>
                    <Input placeholder='Password' onChange={handlepassword} value={password} type='password'/>
                    <Link>Forgot password?</Link>
                    
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {error ?<Error>Something went wrong...</Error>:<Error></Error>}
                </Form>
            </Wrapper>
         </Container>
    )
}

export default Login;