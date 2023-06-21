import React,{useState} from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import {items} from '../items.js';

const Container = styled.div`
    width:100vw;
    height:100vh;
    
    position:relative;
    overflow: hidden;
    display:flex;
    
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #f4aa75;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    color:maroon;
    position:absolute;
    left:${props => props.direction === 'left' && '10px'};
    right:${props => props.direction === 'right' && '10px'};
    top:0;
    bottom:0;
    margin :auto;
    cursor: pointer;
    opacity:0.5;
    z-index:1;
    transition:all 0.3s ease; 
    &:hover{
    
    transform: scale(1.2);
    }


`

const Wrapper = styled.div`
    
    display:flex;
    
    flex-direction: row;
    transform:translateX(${props=>props.slideindex * -100}vw);
    transition:all 1.5s ease;
`
const Slide = styled.div`
 display:flex;
 align-items: center;
 width: 100vw;
 height: 100vh; 
 background-color: #${props => props.bg};
`
const Imgcontainer = styled.div`
flex:1;  
height: 100%;



`
const Image = styled.img`
height: 100%;

`

const Infocontainer = styled.div`
padding: 10px;  
flex:1; 


 
`
const Title = styled.h1`
  font-size  :70px ;
`
const Description = styled.p`
  
    margin:50px,0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.5px;
`
const Button = styled.button`
  padding  :10px ;
  margin-top: 20px;
  font-size: 15px;
  background-color: transparent;
  cursor:pointer;
  border-radius: 6px;
  transition:all 0.3s ease; 
  &:hover{
    background-color: #b4dcff;
    transform: scale(1.2);
  }
`




function Slider() {

    const[slideIndex,setSlideIndex]=useState(0);
    function handleClick(direction){
        if(direction === 'left'){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }
        else if(direction === 'right'){
            setSlideIndex(slideIndex<2?slideIndex+1:0 )
        }

    }


    return (

        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftIcon />
            </Arrow>

            <Wrapper slideindex={slideIndex}>
                {items.map(item => {
                    return (
                        <Slide bg={item.bg}>
                            <Imgcontainer>
                                <Image src={item.img} />
                            </Imgcontainer>
                            <Infocontainer>
                                <Title>
                                    {item.title}
                                </Title>
                                <Description >
                                    {item.description}
                                </Description>
                                <Button>
                                    SHOP NOW
                                </Button>
                            </Infocontainer>
                        </Slide>
                    )

                })}



            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <ArrowRightIcon />
            </Arrow>

        </Container>
    )
}
export default Slider;




