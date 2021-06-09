import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15rem;
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 1rem;
`;

const ActionBtn = styled.button`
    padding: 0.5rem;
    border-radius: 20px;
    width: 8rem;
    border: 2px #6096eb solid;
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
        color: white;
        background-color: #6096eb;
    }
`;

const CallToAction = ({ title, btnText }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ActionBtn>{btnText}</ActionBtn>
        </Container>
    );
};

export default CallToAction;
