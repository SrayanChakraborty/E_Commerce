import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularproduct } from '../items';
import Product from './product';
import axios from 'axios';

const Container = styled.div`
  display:flex; 
  padding:30px;
  flex-wrap: wrap;
  justify-content: space-between;
`







function Products({ cat, sort, filter }) {

    const [products, setproducts] = useState([]);
    const [filteredproducts, setfilteredproducts] = useState([]);
    

    useEffect(() => {
        const getproduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/product?category=${cat}`);
                setproducts(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        getproduct();
    }, [cat])


    useEffect(() => {
        cat && setfilteredproducts(
            products.filter((item) => Object.entries(filter).every(([key, value]) => {
                return (item[key].includes(value))
            }))
        )
    }, [cat, products, filter]);


    useEffect(()=>{
        if((sort==='latest')){
            setfilteredproducts((prev)=>{
                return([...prev].sort((a,b)=>a.createdAt-b.createdAt));
            });

        }
        else if((sort==='asc')){
            setfilteredproducts((prev)=>{
                return([...prev].sort((a,b)=>a.price-b.price));
            })
        }
        else{
            setfilteredproducts((prev)=>{
                return([...prev].sort((a,b)=>b.price-a.price)); 
            })
        }
    },[sort]);

    return (
        <Container>
            {
                cat? filteredproducts.map(item=>{
                    return (<Product item={item} key={item.id} />)
                }):popularproduct.map((item)=>{
                    return (<Product item={item} key={item.id} />) 
                })
            }

        </Container>
    )



}

export default Products;




