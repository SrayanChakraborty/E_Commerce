import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/announcements';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import { removeProduct } from '../redux/cartRedux';


const Container = styled.div`
    
`
const Wrapper = styled.div`
    height:100vh;
    width: 100vw;
`
const Title = styled.h1`
    text-align: center;
`
const Top = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Bottom = styled.div`
    display:flex;
    flex-direction: row;
    height:100vh;
    width:100vw;
    
`
const TopButton = styled.button`
    width:130px;
    height:40px;
    margin:20px;
    border:${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color:${props => props.type === 'filled' && 'white'};
    cursor:pointer;
`
const Toptext = styled.span`
    text-decoration: underline;
    cursor: pointer;
`
const Info = styled.div`

    
    
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    margin-top:30px ;
`

const Productdetail = styled.div`
    
    margin: 20px;
    display: flex;
    flex-direction: column;
    font-size:20px;
`
const Image = styled.img`
        height: 166px;
        width: 265px;
`
const Productname = styled.div`
    
`
const Productid = styled.div`
    
`
const Productcolor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const Productsize = styled.div`
    
`
const Pricedetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Productamountcontainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
`
const Productamount = styled.div`
    border: 2px solid maroon;
    border-radius: 5px;
    height: 30px;
    width:30px;
    display :flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    font-size: 30px;
`
const Productprice = styled.h1`
    font-size: 30px;
`
const Productinfo = styled.div`
    flex:2;
`
const Hr = styled.hr`
    background-color:#eee;
    border: none;
    height:1px;
`
const Summary = styled.div`
    flex:1;
   
    margin-right:20px;
    height:37%;
    width:50%;
    background-color:#eee;
    border-radius:10px;
    box-shadow: 4px 4px 7px;
    
    
`
const Summarytitle = styled.h1`
    margin :10px;
`
const Summaryitem = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:20px;
  margin-right: 10px;
  font-size: ${props => props.type === 'total' && "30px"};
  margin-left:10px
`
const Summaryitemtext = styled.span`
   
`
const Summaryitemprice = styled.span`
    
`
const Button = styled.button`
   margin-left:10px; 
   height: 38px;
    width: 94%;
    background-color:black;
    font-size:15px;
    cursor:pointer;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
    border :none;
    color:white;
    border-radius: 5px;
`




function Cart() {
    const KEY=process.env.STRIPE_KEY;

    const cart = useSelector(state => state.cart);
    const [stripetoken, setstripetoken] = useState(null);
    const dispatch=useDispatch()


    function onToken(token) {
        setstripetoken(token)
    }
    console.log(stripetoken)

    function handleremoveclick(){
        dispatch(
            removeProduct({...cart})
        )    
    }

    return (

        <Container >
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <Link to={'/'}><TopButton>Continue Shopping</TopButton></Link>
                    <Toptext>Shopping bag(2)</Toptext>
                    <Toptext>Your Cart(0)</Toptext>
                    <TopButton type='filled'>Checkout</TopButton>
                </Top>
                <Bottom>

                    <Productinfo>
                        {cart.products.map((product) => {
                            return (
                                <Info>
                                    <Image src={product.img} ></Image>
                                    <Productdetail>

                                        <Productname>
                                            <b>Product:</b>{product.title}
                                        </Productname>
                                        <Productid><b>ID:</b>{product._id}</Productid>
                                        <Productcolor color={product.color} />
                                        <Productsize><b>SIZE:</b>{product.size}</Productsize>

                                    </Productdetail>
                                    <Pricedetail>
                                        <Productamountcontainer>

                                            <Productamount>{product.amount}</Productamount>
                                            <Remove onClick={handleremoveclick} style={{cursor:"pointer"}}/>
                                        </Productamountcontainer>
                                        <Productprice>{product.price*product.amount}</Productprice>
                                    </Pricedetail>

                                </Info>
                            )

                        })}
                        <Hr />

                    </Productinfo>

                    <Summary>
                        <Summarytitle >
                            ORDER SUMMARY
                        </Summarytitle>
                        <Hr />
                        <Summaryitem>
                            <Summaryitemtext>Total:</Summaryitemtext>
                            <Summaryitemprice>{cart.total}</Summaryitemprice>
                        </Summaryitem>

                        <Summaryitem>
                            <Summaryitemtext>Delivery Charges: </Summaryitemtext>
                            <Summaryitemprice>₹450</Summaryitemprice>
                        </Summaryitem>

                        <Summaryitem>
                            <Summaryitemtext>Discounts:</Summaryitemtext>
                            <Summaryitemprice>₹2000</Summaryitemprice>
                        </Summaryitem>

                        <Summaryitem type='total'>
                            <Summaryitemtext ><b>Subtotal:</b></Summaryitemtext>
                            <Summaryitemprice>{cart.total}</Summaryitemprice>
                        </Summaryitem>
                        <StripeCheckout
                            Name="SHOPLIFY"
                            billingaddress
                            shippingaddress
                            description={`Your total is ₹${cart.total}`}
                            amount={cart.total}
                            token={onToken}
                            stripeKey={KEY} >


                            <Button>PLACE ORDER</Button>
                        </StripeCheckout>

                    </Summary>

                </Bottom>

            </Wrapper>

            <Footer />

        </Container>
    )
}
export default Cart;