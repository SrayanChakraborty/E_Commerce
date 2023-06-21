
import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/announcements';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { addProduct } from '../redux/cartRedux';
import { publicrequest } from '../requestmethod';
import { useDispatch } from 'react-redux';  

const Container =styled.div`

`
const Imagecontainer =styled.div`
    flex:1;
    
`
const Infocontainer =styled.div`
    flex:1;
    margin-right:70px;
`
const Wrapper =styled.div`
    display:flex;
    
    
`
const Heading =styled.h1`
    font-size:60px;
`
const Description=styled.p`
    text-align: justify;
`
const Price =styled.div`
    font-size: 40px;
    font-weight: 50;
`
const Image =styled.img`
    
`

const Filtercontainer=styled.div`
    display:flex;
    margin-top:20px;
    
`
const Filter=styled.div`
    display:flex;
    justify-content: center;
    margin:10px;
`
const Filtertitle=styled.div `
    font-size: 20px;
`

const Filtersize=styled.select`
    
`
const Filtersizeoption=styled.option`
    
`
const Filtercolour=styled.div`
    width:20px;
    height:20px;
    background-color: ${props=>props.color};
    margin:0px 5px;
    border-radius:50%;
    cursor: pointer;
`

const Addcontainer=styled.div`
    display:flex;
    align-items: center;
    font-weight:700;
    cursor:pointer;
`
const Amount =styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border:1px solid maroon;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0px,5px;
`
const Button=styled.button`
    padding:10px;
    border:2px solid maroon;
    background-color: white;
    cursor:pointer;
    margin-left:21px;
    border-radius: 5px;
    &:hover{    
        background-color: bisque;
        
    }
`
const Amountcontainer=styled.div`
    display:flex;
    width:50%;
    align-items: center;
   

`


function Singleproduct(){
    const location=useLocation();
    const id =(location.pathname.split('/')[2]);
    const[product,setproduct]=useState({})
    const [amount,setamount]=useState(1);
    const [color,setcolor]=useState("");
    const [size,setsize]=useState("");
    const dispatch=useDispatch();

    useEffect(()=>{
        const getproduct=async()=>{
            try{
                const res=await publicrequest.get(`/product/find/${id}`);
                setproduct(res.data);
                
            }
            catch(err){}
        }
        getproduct();
    },[id])

    function changeamount(type){
        
            if (type==='dec'){
               amount>1 && setamount(amount-1)
            }
            else if(type==='inc'){
                setamount(amount+1)
            }
        
    }
    function setfiltercolor(color){
        setcolor(color);
        
    
    }

    function changesize(event){
        const newsize=event.target.value;
        setsize(newsize);
        

    }


    function handleChange(){
        dispatch(
            addProduct({...product,amount,size,color})  

        )
            
    }

    return (
        <Container >
            <Announcement />
            <Navbar />
            <Wrapper>
                <Imagecontainer>
                    <Image src={product.img} />
                </Imagecontainer>
                <Infocontainer >
                    <Heading>
                        {product.title}
                    </Heading>
                    <Description>
                        {product.desc}
                    </Description>
                    <Price>
                        {product.price}
                    </Price>
                    <Filtercontainer >
                        <Filter>
                        <Filtertitle>Colour</Filtertitle>
                        {product.color?.map((c)=>{
                            return(<Filtercolour onClick={()=>setfiltercolor(c)} color={c} key={c} />)

                        })}
                        
                        </Filter>
                        <Filter> 
                           
                            <Filtertitle>Size</Filtertitle>
                            <Filtersize onChange={changesize}>
                            {product.size?.map((m)=>{
                                return (<Filtersizeoption>{m}</Filtersizeoption>)
                                
                            })}
                          
                                
                            </Filtersize>
                        </Filter> 
                        
                    </Filtercontainer>
                    <Amountcontainer>
                    <Addcontainer>
                        <Remove  onClick={()=>changeamount('dec')}/>
                        <Amount>{amount}</Amount>
                        <Add onClick={()=>changeamount ('inc')}/>
                    </Addcontainer>
                    <Button onClick={handleChange}>ADD TO CART</Button>
                </Amountcontainer>   

                </Infocontainer>
               

            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Singleproduct;