import React from 'react';
import styled from 'styled-components';
import { categories } from '../items.js';
import Categoryitems from './categoryitems.jsx';

const Container = styled.div`
   display:flex;
   padding:20px;
   justify-content:space-between;  
`

function Category() {
    return (
        <Container>
            {categories.map(item => {
                return (
                    <Categoryitems item={item} />
                )
            })}
        </Container>
    )
}
export default Category;