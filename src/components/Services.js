import React from 'react';
import styled from 'styled-components';
import ServicesWide from './ServicesWide';

const Container = styled.div`
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    padding: 3rem 0;
    margin-top: 15rem;
`;

const Services = () => {
    return (
        <Container>
            <ServicesWide></ServicesWide>
        </Container>
    );
};

export default Services;
