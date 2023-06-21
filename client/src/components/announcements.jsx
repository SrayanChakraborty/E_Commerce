import React from "react";
import styled from 'styled-components';

const Container=styled.div`
height:30px;
background-color: maroon;
color:white;
display:flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 14px;

`

function Announcement(){
    return (
        <Container>
        FLAT 40% OFF...HURRY!!
    </Container>
    )
}

export default Announcement;