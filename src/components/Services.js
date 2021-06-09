import React from 'react';
import styled from 'styled-components';
import ServicesWide from './ServicesWide';
import ServicesMobile from './ServicesMobile';

const Container = styled.div`
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    padding: 3rem 0;
    margin-top: 15rem;
`;

const Services = () => {
    const viewportWidth = window.innerWidth;

    return (
        <Container>
            {viewportWidth >= 1024 ? (
                <ServicesWide></ServicesWide>
            ) : (
                <ServicesMobile></ServicesMobile>
            )}
        </Container>
    );
};

export default Services;
