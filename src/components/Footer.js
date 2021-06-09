import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 10rem;
    margin-top: 15rem;
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
`;
const Link = styled.a`
    margin-bottom: 0.5rem;
    text-decoration: underline;
    cursor: pointer;
    color: white;
`;

const Footer = () => {
    return (
        <Container>
            <Title>Mock site made by Humberto Gonzalez.</Title>
            <Link href="https://yummy275.github.io/hg-portfolio/">
                Visit My Portfolio Page
            </Link>
            <Link href="https://github.com/Yummy275">Visit My Github</Link>
        </Container>
    );
};

export default Footer;
