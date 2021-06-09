import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 80%;
    max-width: 18rem;
    margin: 1.5rem;
`;

const CardImg = styled.img`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CardBody = styled.div`
    text-align: center;
    padding: 1rem;
`;

const CardTitle = styled.h3`
    margin-top: 1rem;
`;

const CardInfo = styled.p`
    margin-top: 0.5rem;
`;

const Card = ({ cardImg, cardTitle, cardBody }) => {
    return (
        <CardContainer>
            <CardImg src={cardImg} alt="card-img"></CardImg>
            <CardBody>
                <CardTitle>{cardTitle}</CardTitle>
                <CardInfo>{cardBody}</CardInfo>
            </CardBody>
        </CardContainer>
    );
};

export default Card;
