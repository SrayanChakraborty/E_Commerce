import { Email, FacebookOutlined, Instagram, LinkedIn, LocalPhoneOutlined, Map } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    justify-content: space-between;
    font-weight: 800;
    background-color: bisque;
`
const Companyname = styled.h1`
    margin-left:10px;
`
const Companydescription = styled.p`
    width:80%;
    margin-top:10px;
    text-align:justify;
    margin-left:10px;
`
const Socialinfocontainer = styled.div`
    display:flex;
    margin-top:10px;


    
`
const Icons = styled.div`
    width: 40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: 0.3s all ease;
    cursor:pointer;
    &:hover{
        transform: scale(1.3);
    }
`
const Left = styled.div`
    flex:1;
    width:100vw;
`
const Right = styled.div`
    flex:1;
    
    
`
const Center = styled.div`
    flex:1;
    
`
const Heading = styled.h1`
    
`


const List = styled.ul `
  display :flex ;
  flex-wrap: wrap;
  margin:0;
  padding:0;
  list-style: none;
  
`
const Listitem = styled.li`
    width:50%;  
    margin-bottom: 10px;

`
const Contactitem=styled.div`
    display:flex;
    margin:10px;

`


function Footer() {
    return (
        <Container>
            <Left>
                <Companyname>
                    SHOPLIFY
                </Companyname>
                <Companydescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eius perferendis aspernatur ducimus officiis commodi molestias eum illo, provident, atque harum dicta maiores aut magnam nostrum quam minus nobis pariatur.
                </Companydescription>

                <Socialinfocontainer>
                    <Icons bg='405DE6'>
                        <FacebookOutlined />
                    </Icons>
                    <Icons bg='C13584'>
                        < Instagram />
                    </Icons>
                    <Icons bg='5B51D8'>
                        <LinkedIn />
                    </Icons>
                </Socialinfocontainer>

            </Left>
            <Center>
                <Heading >Useful Links</ Heading>
                <List>
                    
                        <Listitem>Cart</Listitem>
                        <Listitem>Home</Listitem>
                        <Listitem>Men's fashion</Listitem>
                        <Listitem>Womens's fashion</Listitem>
                        <Listitem>Accessories</Listitem>
                        <Listitem>My Account</Listitem>
                        <Listitem>Order tracking</Listitem>
                        <Listitem>Wishlist</Listitem>
                    
                </List>

            </Center>
            <Right>
               <Heading>
                Contact
               </Heading>
               <Contactitem>
                    <Map/>Sreenagar Main Road,401 Dhalua North,Kol-700152 
               </Contactitem>
               <Contactitem>
                    <LocalPhoneOutlined />+033 2343 7013
               </Contactitem>
               <Contactitem>
                    < Email/>srayanchakraborty.10@gmail.com
               </Contactitem>
               
            </Right>
        </Container>
    )
}

export default Footer;