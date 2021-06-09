import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 70rem;
    margin: 15rem auto 0 auto;
`;

const CardHolder = () => {
    return (
        <Container>
            <Card
                cardImg="https://placeimg.com/800/900/any"
                cardTitle="Quality"
                cardBody="Consequat amet sit magna magna ad laboris dolore."
            ></Card>
            <Card
                cardImg="https://placeimg.com/800/900/any"
                cardTitle=""
                cardBody="Pariatur pariatur ipsum ut dolore voluptate officia minim ad magna sint cupidatat consequat magna eiusmod."
            ></Card>
            <Card
                cardImg="https://placeimg.com/800/900/any"
                cardTitle="Appricate Ipsum"
                cardBody="Ullamco et voluptate cupidatat irure irure veniam incididunt in veniam occaecat."
            ></Card>
            <Card
                cardImg="https://placeimg.com/800/900/any"
                cardTitle="Sefulne Ipsum"
                cardBody="Ex eiusmod do exercitation et."
            ></Card>
            <Card
                cardImg="https://placeimg.com/800/900/any"
                cardTitle="Quiamn Ipsum"
                cardBody="Dolor velit do ex culpa qui magna occaecat nisi dolore."
            ></Card>
        </Container>
    );
};

export default CardHolder;
