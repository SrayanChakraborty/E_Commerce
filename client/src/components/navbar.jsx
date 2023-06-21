
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/apiCall';






const Nav = styled.div`
    height:60px;
    width:100%;
    

`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    
`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;


`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    
`;
const Center = styled.div`
    flex:1;
    text-align:center;

`;

const Searchcontainer = styled.div`
margin-left: 25px;
border:0.5px solid gray;

display:flex;

`;

const Logo = styled.h1`
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`;

const Menuitems=styled.div`
font-size: 14px;
cursor:pointer;
margin-left:25px;
text-decoration: none;
color:black;

`;




const Input = styled.input`
border:0px;
outline: none;
`

function Navbar() {
    const quantity=useSelector(state=>state.cart.quantity)
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch();

    function handlelogout(){

        logout(dispatch)
    }
    

    return (
        <Nav>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <Searchcontainer>
                    <SearchOutlinedIcon style={{color:"gray",fontSize:"20px"}}/>
                        <Input />
                    </Searchcontainer>
                </Left>
                <Center>
                    <Logo>SHOPLIFY</Logo>
                </Center>
                <Right>
                   {currentUser?null:<Link to={'register'}><Menuitems>REGISTER</Menuitems></Link>}
                   {currentUser?<Menuitems onClick={handlelogout}>LOGOUT</Menuitems>:<Link to={'login'}><Menuitems style={{textDecoration:"none"}}>LOGIN</Menuitems></Link> }
                    <Link to={"/cart"}>
                    <Menuitems>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon /> 
                        </Badge>
                    </Menuitems>
                    </Link>
                   
                        
                    
                </Right>

            </Wrapper>
        </Nav>


    )
}

export default Navbar;



