
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
flex:1;
margin :8px;
height:80vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;


`
const Info = styled.div`
    top:0;
    bottom:0;
    width:100%;
    height: 100%;
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    color:white;
    margin: 20px ;
    font-weight: 600;
    text-shadow: 2px 0px 3px brown;
    font-size: 40px;
`



const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color:grey;
    border-radius: 5px;

`







function Categoryitems({ item }) {

    return (

        <Container>
            <Link to={`products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>
                        SHOP NOW
                    </Button>
                </Info>
            </Link>
        </Container>
    )
}

export default Categoryitems;