import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoImg = styled.img`
    width: 24rem;
    height: 18rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const WordsHolder = styled.div`
    color: white;
    max-width: 42rem;
`;

const Title = styled.h2`
    margin: 1.5rem 0;
    text-align: center;
`;

const Info = styled.p``;

const NavSectionInfo = ({ infoImg, title, body }) => {
    return (
        <Container>
            <InfoImg src={infoImg} alt="icon"></InfoImg>
            <WordsHolder>
                <Title>{title}</Title>
                <Info>{body}</Info>
            </WordsHolder>
        </Container>
    );
};

export default NavSectionInfo;
