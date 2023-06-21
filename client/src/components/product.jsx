import { FavoriteBorderOutlined } from '@mui/icons-material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addProduct } from '../redux/cartRedux';


const Info=styled.div`
   opacity:0;
   position: absolute;
   height:100%;
   width:100%;
   top:0;
   bottom:0;
   display:flex;
   align-items :center;
   justify-content: center;
    background-color: rgba(0,0,0,0.2);
    transition:all 0.5s ease;
`

const Container=styled.div`
  flex:1;
  margin:5px;
  min-width :300px ;
  height: 350px;
  display :flex;
  position:relative;
  align-items: center;
  justify-content:center;
  background-color  :#f5fbfd ;
  &:hover ${Info}{
     opacity:1;
}
`


const Icon=styled.div`
  width:40px;
  height  :40px ;
  border-radius:50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  display:flex;
  margin:10px;
  cursor: pointer;
  transition:all 0.3s ease;

  &:hover{
    background-color: #ff00004b;
    transform: scale(1.2);
  }
  
`
const Image=styled.img`
    height: 75%;
`



function Product({item}){

  const dispatch=useDispatch();
  function handleChange(){
    dispatch(
        addProduct({...item})  

    )
        
}

    return (
        <Container>
         
           <Image src={item.img} />
           <Info>
            <Icon>
            <ShoppingCartOutlined onClick={handleChange}/>
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
              <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined />
            </Icon> 


           </Info>
        </Container>
    )
}
export default Product;