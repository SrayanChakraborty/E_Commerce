import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/announcements';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Products from '../components/products';

const Container = styled.div`

`
const Filter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px;
`
const Filtercontent = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`
const Title = styled.h1`
    margin:20px;
    font-size: 40px;
`
const Filtertext = styled.div`
   
    font-size: 20px;
`

const Select = styled.select`
    width:90px;
    height:30px;
    border-radius: 5px ;

   
`
const Option = styled.option`
    padding:10px;
`


function Productlist() {

    const location=useLocation();
    const cat=location.pathname.split("/")[2];
    const [filter,setfilter]=useState({});
    const [sort,setsort]=useState("latest")
    function handleChange(event){
        const{name,value}=event.target
        setfilter({
            ...filter,
            [name]:value
        })
    }
    function handlesort(event){
        setsort(event.target.value)
    }
    

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{cat.toUpperCase()}</Title>
            <Filtercontent>
                <Filter>
                    <Filtertext>Filter Products: </Filtertext>
                    <Select name='color' onChange={handleChange}>
                        <Option disable >
                            Colour
                        </Option>
                        <Option >white</Option>
                        <Option >black</Option>
                        <Option >yellow</Option>
                        <Option >blue</Option>
                        <Option >green</Option>

                    </Select>
                    <Select name='size' onChange={handleChange}>
                        <Option disable >
                            Size
                        </Option>
                        <Option >XS</Option>
                        <Option >S</Option>
                        <Option >M</Option>
                        <Option >L</Option>
                        <Option >XL</Option>

                    </Select>
                </Filter>
                <Filter>
                    <Filtertext>Sort Products:</Filtertext>
                    <Select onChange={handlesort}>
                        <Option value='latest'>  Latest  </Option>
                        <Option value='asc'>Price ascending</Option>
                        <Option value='desc'>Price Descending</Option>


                    </Select>
                </Filter>
            </Filtercontent>
            <Products cat={cat} filter={filter} sort={sort}/>
 
            <Footer />

        </Container>
    )



}

export default Productlist;


