import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 10rem;
    margin-top: 15rem;
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
`;

const SmlTxt = styled.p``;

const Footer = () => {
    return (
        <Container>
            <SmlTxt>Footer</SmlTxt>
        </Container>
    );
};

export default Footer;
