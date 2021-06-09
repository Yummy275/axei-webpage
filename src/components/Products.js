import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    padding: 3rem 0;
    margin-top: 15rem;
    color: white;
`;

const Title = styled.h2`
    text-align: center;
`;

const Products = () => {
    return (
        <Container>
            <Title>Products Component</Title>
        </Container>
    );
};

export default Products;
