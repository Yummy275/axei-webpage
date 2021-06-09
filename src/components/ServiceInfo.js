import React from 'react';
import styled from 'styled-components';
import FadeShiftIn from './FadeShiftIn';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    max-width: 22rem;
    margin: 1.5rem;
    @media (min-width: 1024px) {
        margin: 0 0 0 5rem;
    }
`;

const InfoImg = styled.img`
    width: 100%;

    @media (min-width: 1024px) {
        width: 22rem;
        height: 21rem;
    }
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    opacity: 0;
    animation: ${FadeShiftIn('30px', '5px')} 0.3s ease forwards;
`;

const WordsHolder = styled.div`
    color: white;
    max-width: 42rem;
    opacity: 0;
    animation: ${FadeShiftIn('30px', '5px')} 0.3s 0.1s ease forwards;
`;

const Title = styled.h2`
    margin: 1.5rem 0;
    text-align: center;
`;

const Info = styled.p``;

const ServiceInfo = ({ infoImg, title, body }) => {
    return (
        <Container>
            <InfoImg key={`${title}img`} src={infoImg} alt="icon"></InfoImg>
            <WordsHolder key={title}>
                <Title>{title}</Title>
                <Info>{body}</Info>
            </WordsHolder>
        </Container>
    );
};

export default ServiceInfo;
